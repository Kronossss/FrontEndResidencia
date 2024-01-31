import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'realceTermo'
})
export class RealceTermoPipe implements PipeTransform {

  transform(valor: string, termo: string): string {
    const regex = new RegExp(termo, 'gi');
    return valor.replace(regex, (match) => `<strong>${match}</strong>`);
  }

}
