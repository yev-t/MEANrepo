import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

  constructor(private http:HttpClient) { }

  all_movies(callback){
  	this.http.get("/api").subscribe((movies_retrieved)=>{
  		callback(movies_retrieved);
  	});
  }

  get_movie(movie_id, callback){
  	this.http.get("/api/"+movie_id).subscribe((data)=>{
  		callback(data);
  	});
  }

  delete_movie(movie_id, callback){
    console.log(movie_id);
    this.http.delete("/api/"+movie_id).subscribe((data)=>{
      callback(data);
    })
  }

  new_movie(movie, review, callback){
    this.http.post("/api", movie).subscribe((data)=>{
      callback(data);
    });
  }

}
