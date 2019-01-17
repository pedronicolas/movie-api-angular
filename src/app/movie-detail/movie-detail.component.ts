import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id: number;
  movieData: any;
  imgDomain: string;


  constructor(private route: ActivatedRoute, private api: MoviesService) {
    this.imgDomain = api.getImgDomain();
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getMovieEspecific(this.id).then((result: any) => {
      this.movieData = result;
    })
  }


}
