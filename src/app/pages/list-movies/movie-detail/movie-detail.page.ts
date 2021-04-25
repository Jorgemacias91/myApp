import { Detail } from './detail.model';
import { MoviesService } from '../../../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  movieDetail:Detail;

  constructor(private activateRoute:ActivatedRoute, private moviesService:MoviesService, private router:Router) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const idMovie = paramMap.get('id')
      console.log(idMovie)
     this.moviesService.getMovieDetail(idMovie).subscribe(data => {
       this.movieDetail = data
       console.log(this.movieDetail)


     })
    })

  }

  handleBack(){
    this.router.navigate(['/list-movies'])
  }

}
