// propriedades.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css']
})
export class PropriedadesComponent {
  @Input() veiculo: any;
  propriedades: string[] = [];

  ngOnChanges() {
    this.propriedades = Object.keys(this.veiculo);
  }


}
