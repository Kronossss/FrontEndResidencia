import { Component, OnInit } from '@angular/core';
import { ArtigoService } from '../services/artigo.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})

export class NoticiasComponent implements OnInit {
  artigos: any[] = [];

  constructor(private artigoService: ArtigoService) { }

  ngOnInit(): void {
    this.artigoService.obterArtigos(3).subscribe(artigos => this.artigos = artigos);
  }
}
