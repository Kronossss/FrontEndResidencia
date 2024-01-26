import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { WikipediaApiService } from '../wikipedia-api.service';

@Component({
  selector: 'app-resultado-pesquisa',
  templateUrl: './resultado-pesquisa.component.html',
  styleUrl: './resultado-pesquisa.component.css',
  providers: [WikipediaApiService]

})
export class ResultadoPesquisaComponent{
  @Input() termo : string = '';
  @Input() artigos : any[] = [];

  constructor(private wikipediaApiService: WikipediaApiService) {}


}
