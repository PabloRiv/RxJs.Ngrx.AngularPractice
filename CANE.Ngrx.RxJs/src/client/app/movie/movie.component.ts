import { Component, OnInit } from "@angular/core";
//import { Observable } from "rxjs";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";

import { Movie } from "./movie";
import { MyObserver } from "../shared/miObserver";


@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  numbers = [1,5,9];
  //source = Observable.from(this.numbers);
  title = "Welcome to the movies"
  count = "empty";
  source = Observable.create(observer => {
      let index = 0;
      let produceValue = () => {
        observer.next(this.numbers[index++]);

        if(index < this.numbers.length) {
          setTimeout(produceValue, 250);
        } else {
          observer.complete();
        }
      }
      produceValue();    
  }).map(n => n * 2)
    .filter(n => n > 4);

  // constructor(public count:Observable<number>) { 
  constructor() { 
     //this.count = 6;
  }

  ngOnInit() {
     //this.source.map(res => res.toString()).subscribe(item => this.count = item);
     //this.source.subscribe(new MyObserver);
     this.source.subscribe(
       value => console.log(`value: ${ value }`),
       e => console.log(`error: ${e}`),
       () => console.log("complete")
     );
  }

}
