import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revert',
  standalone: true
})
export class RevertPipe implements PipeTransform {

  transform(value: number): number {
    let rev  = 0;
    while(value!=0){
      let rem = value % 10;
      rev = rev*10 + rem;
      value = Math.floor(value/10);
    }
    return rev;
  }

}
