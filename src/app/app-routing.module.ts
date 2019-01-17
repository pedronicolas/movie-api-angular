import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TrendingComponent } from './trending/trending.component';


const routes: Routes = [
  {path: 'trending', component: TrendingComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: '', redirectTo:'home' ,pathMatch:'full'},
  {path: '**',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
