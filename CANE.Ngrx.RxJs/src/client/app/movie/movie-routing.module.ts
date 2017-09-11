import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from "@angular/router";

import { MovieComponent } from "./movie.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: MovieComponent }
    ])
  ],
  exports: [ RouterModule ]
})
export class MovieRoutingModule { }
