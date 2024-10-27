import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial',
  standalone: true
})
export class FactorialPipe implements PipeTransform {

  transform(n: number): number {
    let fact = 1;
    for(let i =1;i<=n;i++){
      fact = fact * i;
    }
    return fact;
  }

}
