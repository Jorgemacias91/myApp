import { MoviesService } from './../../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  moviesFavorite = [];

  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
    this.moviesFavorite = this.moviesService.getMovieFavorite();
    console.log(this.moviesFavorite)
  }


}
