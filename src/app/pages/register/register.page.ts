import { MoviesService } from './../../movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private moviesService:MoviesService, private router:Router) { }

  ngOnInit() {
  }

  async onRegister(email:HTMLInputElement, password:HTMLInputElement){
    try {
      const user = await this.moviesService.register(email.value, password.value)
      if(user){
        const isVerified = this.moviesService.isEmailVerified(user)
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
