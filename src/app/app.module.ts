import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesService } from './movies.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    HomeComponent,
    TrendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
