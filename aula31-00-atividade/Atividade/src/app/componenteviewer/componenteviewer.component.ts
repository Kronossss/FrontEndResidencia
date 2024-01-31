import { Component, OnInit } from '@angular/core';
import { ReturnobservableService } from '../returnobservable.service';

@Component({
  selector: 'app-number-viewer',
  templateUrl: './number-viewer.component.html',
  styleUrl: './number-viewer.component.css'
})
export class NumberViewerComponent {

  numbers: number[] = [];

  constructor(private numberGeneratorService: ReturnobservableService) {}

  ngOnInit(): void {
    this.numberGeneratorService.getNumeros().subscribe(
      number => {
        this.numbers.push(number + 1); // Adiciona 1 para exibir números de 1 a 100
      }
    );
  }

}