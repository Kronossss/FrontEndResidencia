import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesapiService {

  constructor(private https : HttpClient) {}
  getpaises():Observable<any>{
    return this.https.get(" https://restcountries.com/ ");
  }
}
