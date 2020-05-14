import { PostsService } from './../service/posts.service';
import { Component } from '@angular/core';
import IPost from '../interfaces/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private posts: IPost;
  textoBuscar = '';

  post: IPost[];
  valida = new RegExp("[^0-9]");

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.listPosts();
  }

  listPosts() {
    this.postService.getPost()
      .subscribe(post => {
        this.posts = post;
    }, err => {
      console.log('Erro ao buscar o post ', err);
    });
  }
  
  getPosts() {
    return this.posts;
  }

  searchOption() {
    return localStorage.getItem('pesquisaOption');
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
  }
}