import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})

export class FiltroPipe implements PipeTransform {
  transform(value: string[], pesquisa: string): string[] {
    if (!pesquisa) {
      return value;
    } else {
      return value.filter(nome => {
        return nome.includes(pesquisa);
      });
    }
  }
}
