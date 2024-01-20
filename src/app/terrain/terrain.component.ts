import { Component, OnInit } from '@angular/core';
import { Terrain } from '../terrain';
import { TerrainService } from '../terrain.service';
import { Router } from '@angular/router';
import { Categorie } from '../categorie';
import { Proprietaire } from '../proprietaire';
import { ProprietaireService } from '../proprietaire.service';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit{
  terrain : Terrain[] | undefined;
  terrains : Terrain = new Terrain();
  categorie : Categorie[] | undefined;
  proprietaire : Proprietaire[] | undefined;
  proprietaires : Proprietaire = new Proprietaire();

  constructor(private categorieService : CategorieService,private proprietaireService : ProprietaireService,private terrainService : TerrainService, private router : Router){}

  private getProprietaires(){
    this.proprietaireService.getProprietairesList().subscribe(data => {
    this.proprietaire = data;

    });
  }
  private getCategories(){
    this.categorieService.getCategoriesList().subscribe(data => {
    this.categorie = data;

    });
  }


  ngOnInit(): void { // execute avant constructor ( charger une seule fois )
    this.getTerrains();
    this.getCategories();
    this.getProprietaires();
  }

  private getTerrains(){
    this.terrainService.getTerrainsList().subscribe(data => {
    this.terrain = data;

    });
  }

  private getNomProprietaireById(terrainId : number|undefined){
    this.terrainService.getNomProprietaireById(terrainId).subscribe(data =>{ // pour ecouter les emissions d'observable
      console.log(data);
      window.location.reload();
    });
  }

}
