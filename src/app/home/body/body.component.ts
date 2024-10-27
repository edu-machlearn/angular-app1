import { NameService } from './../../name.service';
import { Component, Input, Output,EventEmitter } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RatingModule,CommonModule,RouterOutlet],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  myName ="";
  constructor(private nameService : NameService){

  }

  ngOnInit(){
    this.myName = this.nameService.getName();
    
  }
}
