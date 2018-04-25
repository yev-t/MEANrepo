import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NewReviewComponent } from './new-review/new-review.component';

const routes: Routes = [
	{path:"",pathMatch:"full",redirectTo:"movies"},
	{path:"movies",component:MovieListComponent},
	{path:"movies/new",component:NewMovieComponent},
	{path:"movies/:id",component:ReviewsComponent},
	{path:"movies/review/:id",component:NewReviewComponent},
	{path:"**",redirectTo:"movies"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
