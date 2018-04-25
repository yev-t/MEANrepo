import { Component, OnInit } from '@angular/core';
import { MovieService } from "../movie.service";
import { ReviewService } from "../review.service";
import { Router, ActivatedRoute, Params } from "@angular/router";


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

	private movie:any;
	private reviews:any;
	private feedback:any;

  constructor(private aroute:ActivatedRoute, private router:Router, private ms:MovieService, private rs:ReviewService) { }


  ngOnInit() {
  	this.aroute.params.subscribe((params:Params)=>{
  		this.load_reviews(params['id']);	
  	});
  }

	delete_review(review_id, movie_id){
	  	this.rs.delete_review(review_id, movie_id, (data)=>{
	  		if(data.errors){
	  			this.feedback=data.errors;
	  		}else{
	  			this.load_reviews(movie_id);
	  		}
	  	});
	}

	delete_movie(movie_id){
		this.ms.delete_movie(movie_id, (data)=>{
			if (data.errors){
				this.feedback=data.errors;
			}else{
				this.router.navigate(['']);
			}
		});
	}

	load_reviews(movie_id){
		this.ms.get_movie(movie_id, (data)=>{
			if (data.errors){
				this.feedback=data.errors;
			}else{
				this.movie=data;
				this.reviews=data._reviews;
				let temp, swapped;
				for (let v=1; v<this.reviews.length-1; v++){
					swapped=false;
					for (let h=0; h<=this.reviews.length-1-v; h++){
						if (this.reviews[h].star_rating<this.reviews[h+1].star_rating){
							temp=this.reviews[h];
							this.reviews[h]=this.reviews[h+1];
							this.reviews[h+1]=temp;
							swapped=true;
						}
					}
					if (!swapped){
						break;
					}
				}
			}
		});
  }

}
