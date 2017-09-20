import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="container">
      <h1>
        Welcome to {{title}}!!
      </h1>
      <div class="row">
      <nav>
        <ul class="nav nav-tabs">
          <li><a routerLink="/gotomovies" routerLinkActive="navLink" >Movies</a></li>
          <li><a routerLink="/govacation" >Vacation</a></li>
        </ul>
      </nav>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = "The Reactive Practice App";
}
