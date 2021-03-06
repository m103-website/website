import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FullscreenDialogComponent} from '../fullscreen-dialog/fullscreen-dialog.component';

import * as BeerSliderScript from 'node_modules/beerslider/dist/BeerSlider.js';
import {MatTabChangeEvent} from '@angular/material/tabs';
import {$e} from "codelyzer/angular/styles/chars";

declare var BeerSlider: BeerSliderScript;

export interface Collection {
  path: string,
  autor: string,
  pictures: Picture[]
  hasOriginal: boolean
}

export interface Picture {
  filename: string,
  title: string,
  iso: string,
  blende: string,
  verschlusszeit: string,
  text: string
}

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent{
  @ViewChild('tabGroup') tabGroup;

  collections: Collection[] = [
    {
      path: 'janic',
      autor: 'Janic',
      pictures: [
        {filename: 'steingross', title: 'Stein gross', iso: '100', blende: 'f/4.1', verschlusszeit: '1/80 Sek.', text: 'Auf dem bearbeiteten Bild wurde folgendes erhöht: Sättigung, Tiefen'},
        {filename: 'pfosten', title: 'Pfosten', iso: '250', blende: 'f/4.6', verschlusszeit: '1/80 Sek.', text: 'Auf dem bearbeiteten Bild wurde folgendes erhöht: Sättigung, Tiefen'},
        {filename: 'türstopper', title: 'Türstopper', iso: '640', blende: 'f/4.4', verschlusszeit: '1/80 Sek.', text: 'Auf dem bearbeiteten Bild wurde folgendes erhöht: Sättigung, Tiefen, Luminanz'}
        ],
      hasOriginal: false
    },
    {
      path: 'jan',
      autor: 'Jan',
      pictures: [
        {filename: 'schaukel', title: 'Die Schaukel', iso: '320', blende: 'f/4.7', verschlusszeit: '1/80 Sek.', text: 'Auf der linken Seite ist das bearbeitete Bild zu sehen. Ich habe die Farbe grün ein wenig kräftiger gemacht, da ich finde, dass diese im originalen Bild zu blass ist. Zusätzlich habe ich die Schattierung in der Kette verändert, durch die etwas dunkleren Farben entstehen mehr Kontraste und die Kette wird interessanter.'},
        {filename: 'wasserhahn', title: 'Der Wasserhahn', iso: '160', blende: 'f/5.5', verschlusszeit: '1/80 Sek.',  text: 'Auf der linken Seite ist das bearbeitete Bild zu sehen. Auf dem originalen Bild sieht man das Wasser auf dem Wasserhahn fast nicht. Deswegen habe ich beim bearbeiten darauf geschaut, dass die Wassertropfen auf dem Hahn zum Vorschein kommen. Der Rest des Bildes gefällt mir farblich sehr gut, deswegen habe ich versucht den Rest so orignalgetreu wie möglich zu belassen'},
        {filename: 'zaun', title: 'Der Zaun', iso: '640', blende: 'f/5.1', verschlusszeit: '1/80 Sek.',  text: 'Auf der linken Seite ist das bearbeitete Bild zu sehen. Diese Bild wurde an einem sehr bewöklten Tag aufgenommen. Ich wollte jedoch dass die Stimmung eines sonnigen Tages vermittelt wird, deswegen habe ich das Bild farblich auch sehr stark verändert. Ich habe die Gelb- und Grüntöne im Bild stark hervorgehoben.'}
        ],
      hasOriginal: true
    },
    {
      path: 'marco',
      autor: 'Marco',
      pictures: [
        {filename: 'steinklein', title: 'Stein klein', iso: '80', blende: 'f/5', verschlusszeit: '1/80 Sek.', text: ''},
        {filename: 'schachfigur', title: 'Schachfigur', iso: '160', blende: 'f/4', verschlusszeit: '1/80 Sek.',  text: ''},
        {filename: 'hydrant', title: 'Hydrant', iso: '160', blende: 'f/3.9', verschlusszeit: '1/80 Sek.',  text: ''}
      ],
      hasOriginal: false
    }
  ];

  constructor(public dialog: MatDialog) { }

  loadedInnerImages = new Set<Picture>();
  loadedOuterImages = new Set<Picture>();

  openFullscreenDialog(path: string, filename: string, hasOriginal: boolean): void {
    const dialogRef = this.dialog.open(FullscreenDialogComponent, {
      height: 'fit-content',
      width: 'fit-content',
      data: {path, filename, hasOriginal}
    });
  }

  initCollection($event?: MatTabChangeEvent) {
    this.collections[$event === undefined ? this.tabGroup.selectedIndex : $event.index].pictures.forEach(p => {
      new BeerSlider(document.getElementById(p.filename + '-slider'));
    })
  }

  onLoad(picture: Picture, type: boolean) {
    if (type == false){
      this.initCollection();
    }
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
