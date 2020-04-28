import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

import * as BeerSliderScript from 'node_modules/beerslider/dist/BeerSlider.js'
declare var BeerSlider: BeerSliderScript;

@Component({
  selector: 'app-fullscreen-dialog',
  templateUrl: './fullscreen-dialog.component.html',
  styleUrls: ['./fullscreen-dialog.component.css']
})
export class FullscreenDialogComponent implements AfterViewInit{

  constructor(
    public dialogRef: MatDialogRef<FullscreenDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit(): void {
    new BeerSlider(document.getElementById(this.data + '-slider-fullscreen'));
  }
}
