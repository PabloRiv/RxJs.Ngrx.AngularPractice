import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Observable } from "rxjs";
// import { Observable } from "rxjs/Observable";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/filter";
// import "rxjs/add/operator/fromEvent";

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
  @ViewChild("circleelement", {read: ElementRef}) circle: ElementRef;
  //circle = document.getElementById("circle");
  //console.log(this.circle);

  // demo of using with events
  source = Observable.fromEvent(document, "mousemove")
  .map((e: MouseEvent) => {
    return {
      x: e.clientX,
      y: e.clientY
    }
  });
  // source = Observable.fromEvent(document, "mousemove")
  //   .map((e: MouseEvent) => {
  //     return {
  //       x: e.clientX,
  //       y: e.clientY
  //     }
  //   });
    // }).filter(value => value.x < 500);


  // demo of using operators
  // source = Observable.create(observer => {
  //     let index = 0;
  //     let produceValue = () => {
  //       observer.next(this.numbers[index++]);

  //       if(index < this.numbers.length) {
  //         setTimeout(produceValue, 250);
  //       } else {
  //         observer.complete();
  //       }
  //     }
  //     produceValue();    
  // }).map(n => n * 2)
  //   .filter(n => n > 4);

  // constructor(public count:Observable<number>) { 
  constructor() { 
     //this.count = 6;
  }

  ngOnInit() {
     //this.source.map(res => res.toString()).subscribe(item => this.count = item);
     //this.source.subscribe(new MyObserver);
   
    // used with demo about events
    //console.log(circleelement);
    this.source.subscribe(
      //value => console.log(value),
      value => this.onNext(value),
      e => console.log(`error: ${e}`),
      () => console.log("complete")
    );


    // used with demo about operators
    //  this.source.subscribe(
    //    value => console.log(`value: ${ value }`),
    //    e => console.log(`error: ${e}`),
    //    () => console.log("complete")
    //  );
  }

  myFunction() {
    let myVariable: number = 1;
  }

  onNext(value) {
    this.circle.nativeElement.style.left = value.x + "px";
    this.circle.nativeElement.style.top = value.y + "px";
    // this.circle.nativeElement.style.left = parseInt(value.x);
    // this.circle.nativeElement.style.top = parseInt(value.y);
  }

}
