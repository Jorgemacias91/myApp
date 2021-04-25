import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMoviesPage } from './list-movies.page';

const routes: Routes = [
  {
    path: '',
    component: ListMoviesPage
  },
  // {
  //   path: 'movie-detail/:id',
  //   loadChildren: () => import('./movie-detail/movie-detail.module').then( m => m.MovieDetailPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMoviesPageRoutingModule {}
