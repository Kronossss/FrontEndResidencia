// categoria-estilo.directive.ts

import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCategoriaEstilo]'
})
export class CategoriaEstiloDirective implements OnInit {
  @Input('appCategoriaEstilo') categoria: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.aplicarEstilo();
  }

  private aplicarEstilo(): void {
    const corPorCategoria: { [key: string]: string } = {
      Avioes: '#87CEEB',
      Carros: '#4CAF50',
      Barcos: '#1E90FF'
    };

    const cor = corPorCategoria[this.categoria] || '#333'; // Cor padrão se não houver correspondência

    this.renderer.setStyle(this.el.nativeElement, 'background-color', cor);
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white'); // Texto em branco para melhor legibilidade
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '5px');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }
}
