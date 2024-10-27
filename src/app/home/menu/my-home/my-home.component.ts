import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-home',
  standalone: true,
  imports: [MatButtonModule,MatButtonModule,MatCardModule,
    FormsModule,MatFormFieldModule,MatInputModule,CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './my-home.component.html',
  styleUrl: './my-home.component.css'
})
export class MyHomeComponent {
  submitData:any;
  onSubmit(myFormData:any){
    this.submitData = myFormData.value;
    console.log(this.submitData.name);
  }
}
