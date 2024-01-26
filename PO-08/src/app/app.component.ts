import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { WikipediaApiService } from './wikipedia-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WikiAPI';
  termo: string = '';
  artigos: any[] = [];
  resultado: boolean = false;

  constructor(private wikipediaApiService: WikipediaApiService) { }

  termoBusca(event: string): void {
    this.termo = event;
    this.realizarPesquisa();
  }

  realizarPesquisa() {
    this.wikipediaApiService.getArticles(this.termo).subscribe((data) => {
      this.artigos = data.query.search.map((artigo: any) => {
        return {
          title: artigo.title,
          snippet: artigo.snippet,
          link: `https://pt.wikipedia.org/?curid=${artigo.pageid}`
        }
      });
    });
    this.resultado = true;
  }
}
