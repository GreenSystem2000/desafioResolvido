import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from './../service/posts.service';
import IPost from '../interfaces/post.interface';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {
  private id: number;
  private posts: any;
  private postsFiltrados: any[];
  textoBuscar = '';

  constructor(private route: ActivatedRoute, private postService: PostsService) {
    this.id = parseInt(this.route.snapshot.paramMap.get('userId'));
  }
  
  ngOnInit() {
    this.listPosts();
  }
  
  listPosts() {
    this.postService.getPost()
      .subscribe(post => {
        this.posts = post;
        this.postsFiltrados = this.posts.filter(posts => posts.userId === this.id);
    }, err => {
      console.log('Erro ao buscar o post ', err);
    });
  }

  searchOption() {
    return localStorage.getItem('pesquisaOption');
  }

  buscar(event) {
    this.textoBuscar = event.target.value;
  }

  getId() {
    return this.id;
  }

  getPosts() {
    return this.postsFiltrados;
  }
}