import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { FullscreenDialogComponent } from './fullscreen-dialog/fullscreen-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { PreviewComponent } from './preview/preview.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { FlexLayoutModule } from '@angular/flex-layout';
import { VideoComponent } from './video/video.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    FullscreenDialogComponent,
    PreviewComponent,
    VideoComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatTabsModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        FlexLayoutModule,
        MatTooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
