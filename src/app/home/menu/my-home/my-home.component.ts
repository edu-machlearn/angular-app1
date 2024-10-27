import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-my-home',
  standalone: true,
  imports: [MatButtonModule,MatButtonModule,MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './my-home.component.html',
  styleUrl: './my-home.component.css'
})
export class MyHomeComponent {

}
