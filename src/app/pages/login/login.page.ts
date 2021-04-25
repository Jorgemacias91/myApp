import { MoviesService } from './../../movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router, private moviesService:MoviesService) { }

  ngOnInit() {
    this.moviesService.logout()
  }
  handleBack(){
    this.router.navigate(['/home'])
  }

  async onLogin(email:HTMLInputElement, password:HTMLInputElement){
    try {
      const user = await this.moviesService.login(email.value, password.value)
      if (user){
        const isVerified = this.moviesService.isEmailVerified(user);
        this.redirectUser(isVerified)
      }
    } catch (error) {
      console.log('Error-->', error)
    }
  }


  async onLoginGoogle(){
    try {
      const user = await this.moviesService.loginGoogle();
      if (user){
        const isVerified = this.moviesService.isEmailVerified(user);
        this.redirectUser(isVerified)
      }
    } catch (error) {
      console.log('Error-->', error)
    }
  }

  private redirectUser(isVerified:boolean){
    if(isVerified){
      this.router.navigate(['/home'])
    }
    else{
      this.router.navigateByUrl('/verify-email')
    }
  }
}
