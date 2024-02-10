import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './fullscreen-page.component.html',
  styleUrls: ['./fullscreen-page.component.css'],
})
export class FullscreenPageComponent implements AfterViewInit {
  @ViewChild('map')
  public divMap?: ElementRef;
  constructor() {}
  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento html no fue encontrado';

    const map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9,
    });
  }
}
