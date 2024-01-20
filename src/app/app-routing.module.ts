import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import { LoginComponent } from './login/login.component';
import { Side2Component } from './side2/side2.component';
import { ClientComponent } from './client/client.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { ProprietaireComponent } from './proprietaire/proprietaire.component';
import { UpdateProprietaireComponent } from './update-proprietaire/update-proprietaire.component';
import { TerrainComponent } from './terrain/terrain.component';
import { Terrain2Component } from './terrain2/terrain2.component';

const routes: Routes = [
  {path : "categorie", component : CategorieComponent},
  {path : "login", component : LoginComponent},
  {path : "side2", component : Side2Component},

  {path : "client", component : ClientComponent},
  {path : "proprietaire", component : ProprietaireComponent},
  {path : "terrain", component : TerrainComponent},
  {path : "terrain2", component : Terrain2Component},
  {path : "update-categorie/:id", component : UpdateCategorieComponent},
  {path : "update-proprietaire/:id", component : UpdateProprietaireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
