import { Componente } from './../../models/interface';
import { MoviesService } from '../../movies.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes : Observable<Componente[]>

  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
    this.componentes = this.moviesService.getMenuOpts();
  }

}
