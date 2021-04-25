import { MoviesService } from './../../movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  moviesFavorite = [];

  constructor(private moviesService:MoviesService, private router:Router) { }

  ngOnInit() {
    this.moviesFavorite = this.moviesService.getMovieFavorite();
    console.log(this.moviesFavorite)
  }

  handleDelete(imdbID){
    this.deleteMovieFavorite(imdbID);
    console.log(imdbID)
  }

  deleteMovieFavorite(idMovie){
    this.moviesFavorite = this.moviesFavorite.filter(event => event.imdbID !== idMovie)
  }


}
