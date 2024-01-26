import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ResultadosService {
  private apiUrl = 'https://api.spaceflightnewsapi.net/v3/articles';

  constructor(private http: HttpClient) {}

  obterNoticias(limite: number = 3): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((noticias) => {
        return noticias.slice(0, limite).map((noticia) => ({
          title: this.truncarTexto(noticia.title, 10),
          summary: this.truncarTexto(noticia.summary, 10),
          url: noticia.url,
        }));
      })
    );
  }

  private truncarTexto(texto: string, limitePalavras: number): string {
    const palavras = texto.split(' ').slice(0, limitePalavras);
    return palavras.length < texto.split(' ').length
      ? `${palavras.join(' ')} ...`
      : palavras.join(' ');
  }
}
