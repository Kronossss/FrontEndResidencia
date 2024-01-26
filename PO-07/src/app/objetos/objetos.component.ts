import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent {
  @Input() veiculos: any[] = [];
  @Input() categoriaSelecionada: string = '';
  @Output() veiculoSelecionado = new EventEmitter<any>();

  selecionarVeiculo(veiculo: any) {
    this.veiculoSelecionado.emit(veiculo);
  }
}
