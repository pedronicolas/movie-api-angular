import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit  {
  data:Array<object>;
  title:string;
  imgDomain;
  constructor(private api:MoviesService) {
    this.imgDomain = api.getImgDomain();
   }

  ngOnInit(){
    this.api.trendingMovies().then((result:any)=>{
      this.data = result.results;
      this.title = 'Trending Movies';
    })
  }

}
