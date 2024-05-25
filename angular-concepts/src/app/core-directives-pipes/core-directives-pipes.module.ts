import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreDirectivesPipesRoutingModule } from './core-directives-pipes-routing.module';
import { HomeComponent } from './components/home/home.component';
import { Child1Component } from './components/child1/child1.component';


@NgModule({
  declarations: [
    HomeComponent,
    Child1Component
  ],
  imports: [
    CommonModule,
    CoreDirectivesPipesRoutingModule
  ]
})
export class CoreDirectivesPipesModule { }
