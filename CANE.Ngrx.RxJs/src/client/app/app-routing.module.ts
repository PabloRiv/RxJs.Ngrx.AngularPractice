import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { MovieComponent } from "./movie/movie.component";
import { VacationComponent } from "./vacation/vacation.component";

//const APP_ROUTES: Routes = [
export const routes: Routes = [
  { path: "", redirectTo: "/gotomovies", pathMatch: "full" },
  { path: "gotomovies", loadChildren: "app/movie/movie.module#MovieModule" },
  // { path: "gotomovies", component: MovieComponent },
  { path: "govacation", component: VacationComponent },
];

//export const routing = RouterModule.forRoot(APP_ROUTES);

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)],       
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
