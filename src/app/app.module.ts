import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategorieComponent } from './categorie/categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { ProprietaireComponent } from './proprietaire/proprietaire.component';
import { UpdateProprietaireComponent } from './update-proprietaire/update-proprietaire.component';
import { TerrainComponent } from './terrain/terrain.component';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ClientComponent } from './client/client.component';
import { Side2Component } from './side2/side2.component';
import { Terrain2Component } from './terrain2/terrain2.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    UpdateCategorieComponent,
    ProprietaireComponent,
    UpdateProprietaireComponent,
    TerrainComponent,
    LoginComponent,
    SideBarComponent,
    ClientComponent,
    Side2Component,
    Terrain2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
