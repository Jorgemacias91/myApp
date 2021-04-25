import { MoviesService } from './../../movies.service';
import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {

  constructor(private moviesService:MoviesService, private router:Router) { }




  async onResetPassword(email:HTMLInputElement){
    try {
    await this.moviesService.resetPassword(email.value);
    this.router.navigate(['/login'])

    } catch (error) {
      console.log('Error-->', error)

    }
  }
}
