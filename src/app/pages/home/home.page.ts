import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router, private menuCtrl:MenuController) {}

  listMovies(){
this.router.navigate(['/list-movies'])
  }

  login(){
    this.router.navigate(['/login'])
  }

  toggleMenu(){
    this.menuCtrl.toggle()
  }
}
