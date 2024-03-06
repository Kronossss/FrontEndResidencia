import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private identityURL = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private projectAPIKey = 'AIzaSyCeGS735z3H6_m5srVFPEbsIYPOqvcsg2U';
  usuario: BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>(new Usuario('', '', '', new Date()));

  constructor(private http: HttpClient) { }

  cadastrarUsuario(email: string, senha: string) {
    return this.http.post<AuthResponseData>(this.identityURL + 'signUp?key=' + this.projectAPIKey, {
      email: email,
      password: senha,
      returnSecureToken: true
    }).pipe(
      tap(resData => {
        const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
        const user = new Usuario(resData.email, resData.localId, resData.idToken, expirationDate);
        this.usuario.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
      }));
  }

  login(email: string, senha: string) {
    return this.http.post<AuthResponseData>(this.identityURL + 'signInWithPassword?key=' + this.projectAPIKey, {
      email: email,
      password: senha,
      returnSecureToken: true
    }).pipe(
      tap(resData => {
        const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
        const user = new Usuario(resData.email, resData.localId, resData.idToken, expirationDate);
        this.usuario.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
      }));
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData') as string);
    if (!userData) {
      return;
    }
    const loadedUser = new Usuario(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
    if (loadedUser.token) {
      this.usuario.next(loadedUser);
    }
  }

  logout() {
    this.usuario.next(new Usuario('', '', '', new Date()));
    localStorage.removeItem('userData');
  }

  isAuthenticated() {
    return this.usuario.value.token != null;
  }
}
