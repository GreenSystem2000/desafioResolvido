import { PostsService } from './../service/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import IPost from '../interfaces/post.interface';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  idPost: number;
  post = <IPost>{};

  constructor(private postService: PostsService, private route: ActivatedRoute) {
    const getId = this.route.snapshot.paramMap.get('id');
    this.idPost = parseInt(getId);
  }

  getPostById() {
    this.postService.getPostById(this.idPost)
      .subscribe(post => {
        this.post = post;
      }, err => {
        console.log('Erro ao buscar o post ', err);
      });
  }

  ngOnInit() {
    this.getPostById();
  }
}
