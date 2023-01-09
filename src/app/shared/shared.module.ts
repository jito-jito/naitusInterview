import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ButtonComponent } from './components/button/button.component';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    ButtonComponent,
    ScrollButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    HeroComponent,
    ButtonComponent,
    ScrollButtonComponent
  ]
})
export class SharedModule { }
