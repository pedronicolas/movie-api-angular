import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  imgDomain :string;
  data: Array<object>;
  title: string = '';
  

  constructor(private api:MoviesService){
    this.imgDomain = api.getImgDomain();
  }

  ngOnInit(){
    this.api.popularMovies().then((result:any)=>{
      this.data = result.results;
      // this.logger.log('peliculas recibidas');
      this.title = 'Popular Movies';
    })
  }

  
  clean(){
    this.data = undefined;
  }

}
