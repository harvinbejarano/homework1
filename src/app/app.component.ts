import { Component } from '@angular/core';
import { CoreService } from './core.service';
import { Post } from './post/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Homework 1';
  postUrl = 'https://jsonplaceholder.typicode.com/posts';
  posts: Post[];
  comments: Comment[];
  selectedPost: Post;
  displayPost = true;
  constructor(private coreService: CoreService) {
    this.getAllPost();
  }

  getAllPost() {
    this.displayPost = true;
    this.coreService.getData<Post[]>(this.postUrl)
      .subscribe((data: Post[]) => {
        this.posts = data;
      });
  }

  getPostComments(post: Post) {
    this.displayPost = false;
    const commentUrl = 'https://jsonplaceholder.typicode.com/posts/' + post.id.toString() + '/comments';
    this.selectedPost = post;
    this.coreService.getData<Comment[]>(commentUrl)
      .subscribe((data: Comment[]) => {
        this.comments = data;
      });
  }

  goBack() {
    this.getAllPost();
  }


}
