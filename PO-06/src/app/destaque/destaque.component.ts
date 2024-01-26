import { Component, OnInit } from '@angular/core';
import { DestaqueService } from '../services/destaque.service';
import { ArtigoService } from '../services/artigo.service';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css'],
})
export class DestaqueComponent implements OnInit {
  imagens: any[] = [];

  constructor(private artigoService: ArtigoService) { }

  ngOnInit(): void {
    this.artigoService.obterArtigos(5).subscribe(artigos => {
      this.imagens = artigos
        .filter(artigo => artigo.image) 
        .map(artigo => artigo.image);
    });
  }

  /*
  constructor(private destaqueService: DestaqueService) {}

  ngOnInit() {
    this.carregarDestaque();
  }

  carregarDestaque() {
    this.destaqueService.obterDestaque().then(
      (data) => {
        this.imagens = data;
      },
      (erro) => {
        console.error('Erro ao obter destaques:', erro);
      }
    );
  } */
}
