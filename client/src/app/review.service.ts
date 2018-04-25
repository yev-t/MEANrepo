import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReviewService {

  constructor(private http:HttpClient) { }

  delete_review(review_id, movie_id, callback){
	this.http.delete("/api/"+movie_id+"/review/"+review_id).subscribe((data)=>{
		callback(data);
	});
  }

  create_review(movie_id, new_review, callback){
  	this.http.post("/api/"+movie_id+"/review", new_review).subscribe((data)=>{
  		callback(data);
  	});
  }
}
