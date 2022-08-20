import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingScreenRoutingModule } from './landing-screen-routing.module';
import { LandingScreenComponent } from './landing-screen.component';


@NgModule({
  declarations: [
    LandingScreenComponent
  ],
  imports: [
    CommonModule,
    LandingScreenRoutingModule
  ]
})
export class LandingScreenModule { 

}
