import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullscreenPageComponent } from './pages/fullscreen-page/fullscreen-page.component';
import { MapsLayoutComponent } from './layouts/maps-layout/maps-layout.component';
import { MarkerPagesComponent } from './pages/marker-page/marker-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

const routes: Routes = [
  {
    path: '',
    component: MapsLayoutComponent,
    children: [
      {
        path: 'fullscreen',
        component: FullscreenPageComponent,
      },
      {
        path: 'zoom-range',
        component: ZoomRangePageComponent,
      },
      {
        path: 'markers',
        component: MarkerPagesComponent,
      },
      {
        path: 'properties',
        component: PropertiesPageComponent,
      },
      {
        path: '**',
        redirectTo: 'fullscreen',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
