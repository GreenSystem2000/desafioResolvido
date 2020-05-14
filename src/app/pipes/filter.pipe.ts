import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any,
            texto: string,
            column: string): any[] {
    if (texto === '') {
      return array;
    }

    texto = texto.toLowerCase();

    return array.filter(item => {
      return item[column].toLowerCase()
              .includes(texto);
    });
  }
}