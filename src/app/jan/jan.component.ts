import { Component, OnInit } from '@angular/core';

import * as beer from 'src/assets/BeerSlider.js';

declare var BeerSlider: beer;

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
