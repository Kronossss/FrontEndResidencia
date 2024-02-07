import { Component } from '@angular/core';
import {  NgForm  } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  
  onSubmit(formulario: NgForm){
    let{ id, modelo, capacidade, companhia_aerea } = formulario.value;
    console.log(id, modelo, capacidade, companhia_aerea);
  }
}