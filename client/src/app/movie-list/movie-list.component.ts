import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from "../movie.service";
import { Router, ActivatedRoute, Params } from "@angular/router";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

	private all_movies:any;

    constructor(private router:Router, private aroute:ActivatedRoute, private ms:MovieService) {  }


  ngOnInit() {
  	this.ms.all_movies((movies_retrieved)=>{
  		this.all_movies=movies_retrieved;
  		for (let i=0;i<movies_retrieved.length;i++){
  			let sum=0;
  			for (let j=0;j<movies_retrieved[i]._reviews.length;j++){
  				sum+=movies_retrieved[i]._reviews[j].star_rating;
  			}
        if (sum==0){
          movies_retrieved[i].average_rating=0;
        }else{
  			  movies_retrieved[i].average_rating=Math.round(sum/movies_retrieved[i]._reviews.length);
        }
  		}
  	});
  }

}
