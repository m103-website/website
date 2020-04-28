import { Component, OnInit } from '@angular/core';

import * as BeerSliderScript from 'node_modules/beerslider/dist/BeerSlider.js'
declare var BeerSlider: BeerSliderScript;

@Component({
  selector: 'app-jan',
  templateUrl: './jan.component.html',
  styleUrls: ['./jan.component.css']
})
export class JanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new BeerSlider(document.getElementById('slider'));
  }

}
