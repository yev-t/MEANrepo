import { Component, OnInit } from '@angular/core';
import { MovieService } from "../movie.service";
import { ReviewService } from "../review.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {

	private movie:any;
	private feedback:any;
	private my_review={
		name:"",
		star_rating:5,
		review:"",
		_movie:""
	};

  constructor(private aroute:ActivatedRoute, private router:Router, private ms:MovieService, private rs:ReviewService) { }

  ngOnInit() {
  	this.aroute.params.subscribe((params:Params)=>{
  		this.ms.get_movie(params['id'], (data)=>{
  			if (data.errors){
  				this.feedback=data.errors;
  			}else{
  				this.movie=data;
  				this.my_review._movie=params['id'];
  			}
  		});
  	});
  }

  create_review(){
  	this.aroute.params.subscribe((params:Params)=>{
  		this.rs.create_review(params['id'], this.my_review, (data)=>{
  			if (data.errors){
  				this.feedback=data.errors;
  			}else{
  				this.router.navigate(['movies/'+this.movie._id]);
  			}
  		});
  	});
  }

}
