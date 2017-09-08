import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Response } from "@angular/http";

import { Movie } from "./movie";

const api: string = "/api";
const localPath: string = "";

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies():Observable<Movie[]> {
    return this.http.get(`${api}/movies`)
    .map((res: Response) => {
      return res.json() as Movie[];
    });
  }

  // getMovies() {
  //   return this.http.get<Movie[]>(`${api}/movies`);    
  // }

  
  

  // public getLocalMovies(): Observable<Movie> {
  //   return this.http.get<Movie>('../assets/movies.json')
  //   .map((response) =>  response)     
  // }

  public getLocalMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('../assets/movies.json');         
  }

  // addMovie(movie: Movie):Observable<Movie[]> {
  //   return this.http.post(`${api}/movie/`, movie)
  //   .map((response: Response) => <Movies[]>response.json());
  // }
}


