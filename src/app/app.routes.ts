import { LetsTalkComponent } from './home/menu/lets-talk/lets-talk.component';
import { ConnectingComponent } from './home/menu/connecting/connecting.component';
import { MyHomeComponent } from './home/menu/my-home/my-home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', component : MyHomeComponent},
    {path: 'connecting', component : ConnectingComponent},
    {path: 'lets-talk', component : LetsTalkComponent}
];
