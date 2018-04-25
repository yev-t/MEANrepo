import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";    //Forms import
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { NewMovieComponent } from './new-movie/new-movie.component';

import { MovieService } from './movie.service';
import { ReviewService } from './review.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ReviewsComponent,
    NewReviewComponent,
    NewMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  	MovieService,
  	ReviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
