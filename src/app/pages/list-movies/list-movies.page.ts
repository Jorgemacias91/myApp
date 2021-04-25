import { MoviesService } from '../../movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.page.html',
  styleUrls: ['./list-movies.page.scss'],
})
export class ListMoviesPage implements OnInit {

  movies = [];
  favorites=[];

  constructor(private router:Router, private moviesService:MoviesService) { }

  ngOnInit() {
    // this.moviesService.getMovies().subscribe(data =>{
    //   this.movies = data.Search
    //   console.log(data.Search)
    // })

  }

  handleBack(){
    this.router.navigate(['/home'])
  }

  handleSubmit(title){
    this.moviesService.getMovie(title.value).subscribe(data =>{
      this.movies = data.Search
      console.log(title)
})

}

handleFavorite(imdbID, Title, Poster){
  this.moviesService.addMovieFavorite(Title,Poster,imdbID)
}

}
