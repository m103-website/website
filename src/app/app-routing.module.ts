import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JanComponent} from './jan/jan.component';
import {HomeComponent} from './home/home.component';
import {JanicComponent} from "./janic/janic.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jan', component: JanComponent },
  { path: 'janic', component: JanicComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
