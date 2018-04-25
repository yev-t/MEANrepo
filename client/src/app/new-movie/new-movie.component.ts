import { Component, OnInit } from '@angular/core';
import { MovieService } from "../movie.service";
import { ReviewService } from "../review.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

	private feedback=[];
	private my_movie={
		title:"",
		_reviews:[]
	};
	private my_review={
		name:"",
		star_rating:5,
		review:""
	}

  constructor(private aroute:ActivatedRoute, private router:Router, private ms:MovieService, private rs:ReviewService) { }

  ngOnInit() {
  }

  create_movie(){
  	this.ms.new_movie(this.my_movie, this.my_review, (data)=>{
  		if(data.errors){
          for (let i in data.errors){
            this.feedback.push(data.errors[i]);
          }
  		}else{
  			this.rs.create_review(data._id, this.my_review, (data2)=>{
  				if(data2.errors){
            for (let i in data.errors){
              this.feedback.push(data.errors[i]);
            }
  				}else{
  					this.router.navigate(['']);
  				}
  			});
  		}
  	});
  }

}
