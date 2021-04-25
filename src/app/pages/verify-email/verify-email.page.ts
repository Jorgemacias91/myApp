import { MoviesService } from './../../movies.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {

  user$:Observable<User> = this.moviesService.afAuth.user;

  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
  }
  async onSendEmail(){
    try{
    await this.moviesService.sendVerificationEmail();
    }
    catch (error){
      console.log("Error-->", error)
    }
  }

  ngOnDestroy():void{
    this.moviesService.logout();
  }
}
