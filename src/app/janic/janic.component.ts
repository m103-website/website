import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';

import * as BeerSliderScript from 'node_modules/beerslider/dist/BeerSlider.js'
declare var BeerSlider: BeerSliderScript;

@Component({
  selector: 'app-janic',
  templateUrl: './janic.component.html',
  styleUrls: ['./janic.component.css']
})
export class JanicComponent implements AfterViewInit {

  pictures = [{filename: "steinklein", title: "Stein klein", iso: "kp", blende : "kp", enabled: true},
              {filename: "steingross", title: "Stein gross", iso: "kp", blende : "kp", enabled: true},
              {filename: "pfosten", title: "Pfosten", iso: "kp", blende : "kp", enabled: true},
              {filename: "türstopper", title: "Türstopper", iso: "kp", blende : "kp", enabled: true},
              {filename: "schachfigur", title: "Schachfigur", iso: "kp", blende : "kp", enabled: true}];

  enabledPictures = this.pictures.filter(p => p.enabled);

  constructor() { }

  ngAfterViewInit(): void {
    this.enabledPictures.forEach(p => new BeerSlider(document.getElementById(p.filename + '-slider')));
  }
}

