// veiculo-estilo.directive.ts

import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

interface CorPorCategoria {
  [key: string]: string;
}

@Directive({
  selector: '[appVeiculoEstilo]'
})
export class VeiculoEstiloDirective implements OnInit {
  @Input() categoria: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.aplicarEstilo();
  }

  private aplicarEstilo(): void {
    const cor = this.obterCorPorCategoria(this.categoria) || '#333';

    this.renderer.setStyle(this.el.nativeElement, 'background-color', cor);
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '15px');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '8px');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  private obterCorPorCategoria(categoria: string): string {
    const corPorCategoria: CorPorCategoria = {
      Avioes: '#87CEEB',
      Carros: '#4CAF50',
      Barcos: '#1E90FF'
    };

    return corPorCategoria[categoria];
  }
}
