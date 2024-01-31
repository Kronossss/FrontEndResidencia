import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaApiService {

  constructor(private http: HttpClient) { }

  getArticles(term: string) : Observable<any> {
    return this.http.get(`https://pt.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=${term}`);
  }


}
