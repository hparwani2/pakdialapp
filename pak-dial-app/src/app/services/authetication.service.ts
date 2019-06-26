import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface UserDetails {
  phone: string;
  email: string;
  name: string;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  phone: string,
  name: string,
  email:string
}
export interface TokenPayload2{
    fname : string,
    lname : string,
    mobile : string,
    cname : string,
    lnum : string,
    email : string,
    selected : string,
    website : string
}

export interface TokenPayload3{
  selected : string,
  Businesscate : string,
  Build : string,
  street : string,
  landmark : string
}
export interface UserRating {
  listing_id: string;
  userId: string;
  rating_val: string;
  reviewmessage: string; 
}
export interface BestDeal {
  cat_id : string;
  name : string;
  message : string;
  email : string; 
  phone : string;
  city_id : number
}
export interface StoreRating {
  rating_val: string;
}
@Injectable()
export class AuthenticationService {
  private token: string;

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem('user', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('user');
    }
    return this.token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }
  private request(method: 'post', type: 'login', user?: TokenPayload): Observable<any> {
    let base;

    base = this.http.post(`http://pakdial.com/api/Auth/${type}`,user);

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          if(type === 'login')
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }
}