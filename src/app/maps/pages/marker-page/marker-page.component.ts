import { Component, ElementRef, ViewChild } from '@angular/core';

import { LngLat, Map, Marker } from 'mapbox-gl';

interface markersAndColor {
  color: string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}
@Component({
  templateUrl: './marker-page.component.html',
  styleUrls: ['./marker-page.component.css'],
})
export class MarkerPagesComponent {
  @ViewChild('map')
  public divMap?: ElementRef;

  public zoom: number = 13;
  public map?: Map;

  public currentLngLat: LngLat = new LngLat(
    -79.46249827830616,
    9.058593210119128
  );

  public markers: markersAndColor[] = [];

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento Html no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom: this.zoom,
    });

    this.readToLocalStorage();

    // const marker: Marker = new Marker({
    //   color: 'red',
    // })
    //   .setLngLat(this.currentLngLat)
    //   .addTo(this.map);
  }

  createMarker() {
    if (!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const lngLat = this.map.getCenter();

    this.addMarker(lngLat, color);
  }

  addMarker(lngLat: LngLat, color: string) {
    if (!this.map) return;

    const marker = new Marker({
      color: color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map);

    this.markers.push({
      color,
      marker,
    });

    this.saveToLocalStorage();

    marker.on('dragend', () => this.saveToLocalStorage());
  }
  deleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
    localStorage.removeItem('plainMarkers');
  }

  flyTo(marker: Marker) {
    if (!this.map) return;
    this.map.flyTo({
      zoom: 10,
      center: marker.getLngLat(),
    });
  }

  saveToLocalStorage() {
    const plainMarkers: PlainMarker[] = this.markers.map(
      ({ color, marker }) => {
        return {
          color,
          lngLat: marker.getLngLat().toArray(),
        };
      }
    );
    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }

  readToLocalStorage() {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);
    console.log(plainMarkers);

    plainMarkers.forEach(({ color, lngLat }) => {
      const [lng, lat] = lngLat;
      const cords = new LngLat(lng, lat);
      this.addMarker(cords, color);
    });
  }
}
