import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as mapboxgl from 'mapbox-gl';

(mapboxgl as any).accessToken =
  'pk.eyJ1IjoiZG91Z2xlb24xNiIsImEiOiJjbHJoYzVkaXMwb2k4MmpxbTBpZWM4aDFxIn0.Rs9Y88WxVfVJVHdMk9w-1g';
import { MapsRoutingModule } from './maps-routing.module';

import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layouts/maps-layout/maps-layout.component';
import { FullscreenPageComponent } from './pages/fullscreen-page/fullscreen-page.component';
import { MarkerPagesComponent } from './pages/marker-page/marker-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullscreenPageComponent,
    MarkerPagesComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
  ],
  imports: [CommonModule, MapsRoutingModule],
})
export class MapsModule {}
