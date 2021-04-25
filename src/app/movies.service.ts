import firebase from 'firebase/app';

import { Componente } from './models/interface';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './models/user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth'


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public user$:Observable<User>;

  movieFavorite = [];

  constructor(private http:HttpClient, public afAuth:AngularFireAuth, private afs:AngularFirestore) {

    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null)
      })
    )
  }

  getMovies(){
    return this.http.get<any>("http://www.omdbapi.com/?apikey=20dac387&s=titanic")
  }

  getMovieDetail(id){
    return this.http.get<any>('http://www.omdbapi.com/?apikey=20dac387&i=' + id)
  }

  getMovie(title){
    return this.http.get<any>("http://www.omdbapi.com/?apikey=20dac387&s=" + title)
  }

  getMenuOpts(){
    return this.http.get<Componente[]>('../assets/data/menu.json')
  }

  addMovieFavorite(Title:string, Poster:string, imdbID:string) {
    this.movieFavorite.push({
      Title,
      Poster,
      imdbID
    })
   }

   getMovieFavorite(){
     return [...this.movieFavorite]
   }

   async resetPassword(email:string): Promise<void> {
     try {
      return this.afAuth.sendPasswordResetEmail(email)
     } catch (error) {
       console.log('Error-->', error)
     }
   }



   async loginGoogle(): Promise<User> {
     try {
      const { user } = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      this.updateUserData(user);
      return user
     } catch (error) {
       console.log('Error-->', error)
     }
   }

   async register(email:string, password:string): Promise<User> {
     const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
     await this.sendVerificationEmail();
     return user;
    }

    async login(email:string, password:string): Promise<User> {
      try{
        const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
        this.updateUserData(user);
        return user;
      }
      catch(error){
        console.log('Error-->', error)
      }
    }

   async sendVerificationEmail(): Promise<void> {
     try {
       return (await this.afAuth.currentUser).sendEmailVerification();
     } catch (error) {
       console.log('Error-->', error)
     }
   }

    isEmailVerified(user:User):boolean{
     return user.emailVerified === true ? true : false;
   }

   async logout(): Promise<void> {
     try {
       await this.afAuth.signOut();
     } catch (error) {
       console.log('Error-->', error)
     }
   }

   private updateUserData(user:User){
     const userRef:AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

     const data: User = {
       uid: user.uid,
       email: user.email,
       emailVerified: user.emailVerified,
       displayName: user.displayName,
     };

     return userRef.set(data, {merge:true})
   }

}






