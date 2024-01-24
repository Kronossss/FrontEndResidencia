import { Component } from '@angular/core';
import { PaisesapiService } from '../paisesapi.service';

@Component({
  selector: 'app-apipaises',
  templateUrl: './apipaises.component.html',
  styleUrl: './apipaises.component.css'
})
export class ApipaisesComponent {
  pais : any;

  constructor(private paisServico : PaisesapiService){
    this.paisServico.getpaises().subscribe( pais =>{this.pais = pais;});
    console.log(this.pais);
  }

}
