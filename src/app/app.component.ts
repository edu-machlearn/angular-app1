import { Component,ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import * as stu from '../assets/myData.json';
import { HeaderComponent } from './home/header/header.component';
import { BodyComponent } from './home/body/body.component';
import { FactorialPipe } from './pipes/factorial.pipe';
import { RevertPipe } from './pipes/revert.pipe';
import { NameService } from './name.service';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,RatingModule,
   HeaderComponent,BodyComponent,FactorialPipe,RevertPipe,MatBadgeModule,
   MatButtonModule,MatIconModule,MatCardModule],
   changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myName="";

constructor(private nameService: NameService){
  
}

  ngOnInit() {
    //this.myName = this.nameService.getName();
  }

  showName(){
    this.myName = this.nameService.getName();
  }
}
