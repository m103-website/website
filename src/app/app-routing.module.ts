import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PreviewComponent} from './preview/preview.component';
import {VideoComponent} from './video/video.component';

const routes: Routes = [
  { path: '', component: PreviewComponent},
  { path: 'photos', component: PreviewComponent },
  { path: 'videos', component: VideoComponent },
  { path: '**', redirectTo: ''}
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
