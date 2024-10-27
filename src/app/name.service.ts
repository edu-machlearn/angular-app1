import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor() { }
  getName(){
    
    return "Deepak Kumar";
  }
}
