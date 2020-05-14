import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import IPost from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) { }

  private restApi = "http://jsonplaceholder.typicode.com/posts/";

  getPost(): Observable<IPost> {
    return this.http.get<IPost>(this.restApi);
  }

  getPostById(id: number): Observable<IPost> {
    return this.http.get<IPost>(this.restApi + id);
  }
}