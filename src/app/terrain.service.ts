import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Terrain } from './terrain';
import { Observable } from 'rxjs'; // Reactive Extension JavaScript
import { Proprietaire } from './proprietaire';

@Injectable({
  providedIn: 'root'
})
export class TerrainService {

  private baseUrl = "http://localhost:8080/Terrain";

  constructor(private httpClient : HttpClient) { }

  getTerrainsList() : Observable<Terrain[]>{ // gerer les flux de donnee asynchrone
    return this.httpClient.get<Terrain[]>(`${this.baseUrl}/findAll`);
  }

  getTerrainById(id : number |undefined): Observable<Terrain>{
    return this.httpClient.get<Terrain>(`${this.baseUrl}/findById/${id}`)
    }

    getNomProprietaireById(terrainId : number|undefined):Observable<Proprietaire[]>{
      return this.httpClient.get<Proprietaire[]>(`${this.baseUrl}/${terrainId}/details`);
    }
}
