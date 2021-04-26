import { MoviesService } from './../../movies.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  get email(){
    return this.registrationForm.get('email')
  }

  get password(){
    return this.registrationForm.get('password')
  }

  public errorMessages = {

    email:[
      { type: 'required', message : 'email is required' },
      { type: 'pattern', message : 'Please enter a valid email address' },
    ],
    password:[
      { type: 'required', message : 'password is required' },
      { type: 'pattern', message : 'minimum 8 characters' },
    ]
  }

  registrationForm = this.formBuilder.group({
    email:['', Validators.compose(
    [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,4}$')
    ]

    )],
    password:['', Validators.compose(
    [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9!@#\$%\^&\*\?_~\/]{8,20}$')
    ]
    )]
  })

  constructor(private moviesService:MoviesService, private router:Router, private formBuilder:FormBuilder) { }

 async submit(){
    console.log(this.registrationForm.value.email)
    try {
      const user = await this.moviesService.register(this.registrationForm.value.email, this.registrationForm.value.password)
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
