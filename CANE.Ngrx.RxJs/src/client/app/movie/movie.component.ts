import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from "@angular/core";
import { Observable } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
// import { Observable } from "rxjs/Observable";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/filter";
//import "rxjs/add/operator/fromEvent";

import { Movie } from "./movie";
import { MyObserver } from "../shared/miObserver";
import { MovieService } from "./movie.service";
import { IncrementService } from "../shared/services/increment.service";


@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  numbers = [1, 5, 9];
  //source = Observable.from(this.numbers);
  title = "Welcome to the movies"
  count = "empty";
  //@ViewChild("circleelement", {read: ElementRef}) circle: ElementRef;
  //circle = document.getElementById("circle");
  //console.log(this.circle);

  movies: Movie[];


  // XmlHttpRequest
  @ViewChild("output", { read: ElementRef }) output: ElementRef;
  @ViewChild("buttonel", { read: ElementRef }) buttonn: ElementRef;

  // click = Observable.fromEvent(this.button, "click");
  //click = null;

  // demo of using with events. 
  // source = Observable.fromEvent(document, "mousemove")
  // .map((e: MouseEvent) => {
  //   return {
  //     x: e.clientX,
  //     y: e.clientY
  //   }
  // })
  // .filter(value => value.x < 500)
  // .delay(300);


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
  constructor(private renderer: Renderer2,
    private el: ElementRef, private service: MovieService,
    private counter: IncrementService, private observer: MyObserver) {
    //this.count = 6;

  }

  ngOnInit() {
    // this.service.getLocalMovies()
    //   .subscribe(movie => this.movies.push(movie));



    // this.service.getLocalMovies('../assets/movies.json')
    //   .subscribe(
    //   movie => this.movies = movie,
    //     (err: HttpErrorResponse) => {
    //       if (err.error instanceof Error) {
    //         console.log("Client-side error occurred in the getLocalMovies()")
    //       } else {
    //         console.log("Server-side error occured in the getLocalMovies()");
    //       }
    //     }
    //   );

    //this.source.map(res => res.toString()).subscribe(item => this.count = item);
    //this.source.subscribe(new MyObserver);

    // used with demo about events
    //console.log(circleelement);

    // because the source variable is subscribing to the stream,
    // it is not just getting one set of coordinates, but,
    // a continual stream of coordinate pairs
    // this.source.subscribe(
    //   value => this.onNext(value),
    //   e => console.log(`error: ${e}`),
    //   () => console.log("complete")
    // );


    // used with demo about operators
    //  this.source.subscribe(
    //    value => console.log(`value: ${ value }`),
    //    e => console.log(`error: ${e}`),
    //    () => console.log("complete")
    //  );



  }

  ngAfterViewInit() {
    // XMLHttpRequest
    //let button = this.renderer.listen("buttonel", "click", (event) => true);
    // let button = this.el.nativeElement(this.buttonn);
    //let button = this.el.nativeElement(this.buttonel);
    // this.click = Observable.fromEvent(document.getElementById("button"), "click");
    //this.click = Observable.fromEvent(this.buttonn.nativeElement, "click");

    // this.click.subscribe(
    //   e => this.loadWithRender2("movies.json"),
    //   e => console.log(`error: ${e}`),
    //   () => console.log("complete")
    // );

    //this.getLocalMovies();

    // this.click.mergeMap(e => this.loadWithRender2("movies.json"))
    //   .subscribe(o => console.log(o));
  }


  myFunction() {
    let myVariable: number = 1;
  }

  loadWithRender2(url: string) {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      //if (xhr.status === 200) {
      let moviecollection: Movie[] = this.movies;
      moviecollection.forEach(m => {
        let div = this.renderer.createElement("div");
        const text = this.renderer.createText(m.name + " " + "starring: " + m.cast);

        this.renderer.appendChild(div, text);
        this.renderer.appendChild(this.output.nativeElement, div);
      });
      // } else {
      //   this.observer.error(xhr.statusText);
      // }
    });
    xhr.open("GET", url);
    xhr.send();

    return this.movies;
  }

  // load(url: string) {
  //   let xhr = new XMLHttpRequest();
  //   xhr.addEventListener("load", () => {
  //     let moviecollection: Movie[] = this.movies;
  //     moviecollection.forEach(m => {
  //       //for(let i = 0; i < moviecollection.length; i++) {
  //       //for(let m of moviecollection) {
  //       let div = document.createElement("div");
  //       div.innerText = m.name;
  //       //this.output.appendChild(div);
  //       //document.getElementById("output").appendChild(div);
  //       this.output.nativeElement.appendChild(div);

  //     });
  //   });

  //   xhr.open("GET", url);
  //   xhr.send();
  // }

  // onNext(value) {
  //   this.circle.nativeElement.style.left = value.x + "px";
  //   this.circle.nativeElement.style.top = value.y + "px";
  //   // this.circle.nativeElement.style.left = parseInt(value.x);
  //   // this.circle.nativeElement.style.top = parseInt(value.y);
  // }

  // load(url: string) {
  //   let xhr = new XMLHttpRequest();

  //   xhr.addEventListener("load", () => {
  //     let movies = JSON.parse(xhr.responseText);
  //     movies.array.forEach(m => {
  //       let div = document.createElement("div");
  //       div.innerText = m.name;
  //       //this.output.appendChild(div);
  //       //document.getElementById("output").appendChild(div);
  //       this.output.nativeElement.appendChild(div);

  //     });
  //   });

  //   xhr.open("GET", url);
  //   xhr.send();
  // }

  Counter():void {
    this.counter.increment(1);
  }
  // movie => this.movies = movie,
  // getLocalMovies(): Movie[] {
  getLocalMovies(): void {
    let movieResults: Movie[];
    let executed: boolean = false;
    this.service.getLocalMovies("../assets/movies.json")
      // .do(x => this.results(this.movies))
      .subscribe(
      // movie => movieResults = movie,
      (movie) => {
        this.movies = movie;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occurred in the getLocalMovies()")
        } else {
          // console.log("Server-side error occured in the getLocalMovies()");
          console.log("no error here");
        }
      },
      () => {
        console.log("call complete");
        this.results(this.movies);
      }
    );
    // return movieResults;
  }

  results(moviecollection: Movie[]):boolean {
    // let moviecollection: Movie[] = this.getLocalMovies();
    // this.getLocalMovies();
    // let moviecollection: Movie[] = this.movies;
    moviecollection.forEach(m => {
      let div: string = this.renderer.createElement("div");
      const text: string = this.renderer.createText(m.name + " " + "starring: " + m.cast);

      this.renderer.appendChild(div, text);
      this.renderer.appendChild(this.output.nativeElement, div);
    });
    return true;
  }
}
