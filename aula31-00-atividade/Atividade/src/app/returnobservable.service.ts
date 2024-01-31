import { Injectable } from '@angular/core';
import { Observable, from, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReturnobservableService {

  constructor() { }

   //Este Observable emitirá cada valor do array, um de cada vez, 
    //na ordem em que aparecem no array.
    //O Observable emite o primeiro valor do array (1).
    //depois emite o segundo valor (2), e assim por diante.
    //O Observable completa.
    //Portanto, se você se inscrever neste Observable 
    //e registrar cada valor emitido, verá 1, 2, 3, 4, 5
    // registrado, nessa ordem.

  getNumeros():Observable<any>{
    const source = interval(100)
    .pipe(
      take(100),
    );
    return source;
  }

}
