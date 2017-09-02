import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Response } from "@angular/http";

import { Movie } from "./movie";

const api: string = "/api";

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies():Observable<Movie[]> {
    return this.http.get(`${api}/movies`)
    .map((res: Response) => {
      return res.json() as Movie[];
    });
  }

  addMovie(movie: Movie):Observable<Movie> {
    return this.http.post(`${api}/movie/`, movie)
    .map((res: Response) => {
      return res.json() as Movie;
    });
  }
}


