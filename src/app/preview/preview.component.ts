import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FullscreenDialogComponent} from "../fullscreen-dialog/fullscreen-dialog.component";

import * as BeerSliderScript from 'node_modules/beerslider/dist/BeerSlider.js'
import {MatTabChangeEvent} from "@angular/material/tabs";
declare var BeerSlider: BeerSliderScript;

export interface Collection {
  path: string,
  autor: string,
  pictures: Picture[]
}

export interface Picture {
  filename: string,
  title: string,
  iso: string,
  blende: string
}

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements AfterViewInit{
  @ViewChild('tabGroup') tabGroup;

  collections: Collection[] = [
    {path: "janic",
    autor: "Janic",
    pictures: [
      {filename: "steingross", title: "Stein gross", iso: "", blende : ""},
      {filename: "pfosten", title: "Pfosten", iso: "", blende : ""},
      {filename: "türstopper", title: "Türstopper", iso: "", blende : ""}]},
    {path: "jan",
    autor: "Jan",
    pictures: [
      {filename: "schaukel", title: "Schaukel", iso: "", blende : ""},
      {filename: "wasserhahn", title: "Wasserhahn", iso: "", blende : ""},
      {filename: "zaun", title: "Zaun", iso: "", blende : ""}]},
    {path: "marco",
    autor: "Marco",
    pictures: []}
  ];

  constructor(public dialog: MatDialog) { }

  loadedInnerImages = new Set<Picture>();
  loadedOuterImages = new Set<Picture>();

  currentTab: number = null;

  ngAfterViewInit(): void {
    this.initCollection();
    this.currentTab = this.tabGroup.selectedIndex;
  }

  openFullscreenDialog(path: string, filename: string): void {
    const dialogRef = this.dialog.open(FullscreenDialogComponent, {
      height: 'fit-content',
      width: 'fit-content',
      data: {path: path, filename: filename}
    });
  }

  initCollection($event?: MatTabChangeEvent) {
    this.collections[$event === undefined ? this.tabGroup.selectedIndex : $event.index].pictures.forEach(p => {
      new BeerSlider(document.getElementById(p.filename + '-slider'));
    })
  }

  onLoad(picture: Picture, type: boolean) {
    if (type){
      this.loadedInnerImages.add(picture);
    }else {
      this.loadedOuterImages.add(picture);
    }
  }

  pictureLoaded(picture: Picture){
    return this.loadedInnerImages.has(picture) && this.loadedOuterImages.has(picture);
  }
}
