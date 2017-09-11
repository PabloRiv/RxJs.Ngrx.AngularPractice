import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

/* App Root */
import { AppComponent } from "./app.component";

/* Feature Modules */
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { MovieModule } from "./movie/movie.module";

/* Routing Module */
import { AppRoutingModule } from "./app-routing.module";

/* Components */
import { VacationComponent } from "./vacation/vacation.component";

/* Services */

@NgModule({
  declarations: [
    AppComponent,
    VacationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    // HttpClient,
    // Injectable,
    // Observable,
    //SharedModule.forRoot(),
    SharedModule,
    MovieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
