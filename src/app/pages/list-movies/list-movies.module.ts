import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMoviesPageRoutingModule } from './list-movies-routing.module';

import { ListMoviesPage } from './list-movies.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMoviesPageRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [ListMoviesPage]
})
export class ListMoviesPageModule {}
