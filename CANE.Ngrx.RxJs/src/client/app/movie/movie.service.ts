import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";

import { SharedModule } from "../shared/shared.module";
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

  public getLocalMovies(url:string): Observable<Movie[]> {
    return this.http.get<Movie[]>(url);         
  }

  addMovie(movie: Movie):Observable<Movie[]> {
    return this.http.post(`${api}/movie/`, movie)
    .map((response: Response) => <Movie[]>response.json());
  }
}


