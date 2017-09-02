import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { MovieComponent } from "./movie/movie.component";
import { VacationComponent } from "./vacation/vacation.component";
import { routing } from "./app-routing.module";
import { MovieService } from "./movie/movie.service";

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    VacationComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
