import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiKey = 'dd23631be348a3464fe20399944ef653';
  popularEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;
  trendingMoviesEndpoint = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`;
  http: HttpClient;
  data:object;
  moviesEndPoint = id => `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`;


  constructor(http: HttpClient) {
    this.http = http;
  }

  popularMovies() {
    return new Promise((resolve, reject) => {
      this.http.get(this.popularEndpoint).subscribe(result => {
        // this.logger.log('tenemos las pelis populares!');
        resolve(result);
      })
    })

  }
  trendingMovies(){
    return new Promise((resolve,reject)=>{
      this.http.get(this.trendingMoviesEndpoint).subscribe(result =>{
        this.data = result['results'];
        resolve(result);
      })
    })
  }

  getMovieEspecific(id){
    return new Promise(resolve=>{
      this.http.get(this.moviesEndPoint(id)).subscribe(result =>{
        this.data = result['result'];
        resolve(result);
      })
    })
  }

  getImgDomain() {
    return 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
  }
}
