import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './user.model';


export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  kind: string;
  reigstered?:string;
}


@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);
  token:string = null;
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
        environment.firebaseAPIKey,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    ).pipe(tap((resData)=>{
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
    }))
  }

  signin(email: string, password: string) {
    
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+
      environment.firebaseAPIKey,
      
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    ).pipe(tap((resData)=>{
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
    }))
  }

  logout(){
    this.user.next(null);
  }

  private handleAuthentication(email:string, userId:string, token: string, expiresIn: number){
    const expirationDate = new Date(new Date().getTime() + expiresIn*1000)
    const user = new User(email, userId, token,expirationDate );
    this.user.next(user);
  }
}
