import { Comment } from './comment.interface';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';
import { CoreService } from '../core.service';
import { Post } from '../post/post.interface';



@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comments: Comment[];
  @Input() selectedPost: Post;
  @Output() ActionGoBack = new EventEmitter();
  constructor(private coreService: CoreService) {
  }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    const commentUrl = 'https://jsonplaceholder.typicode.com/posts/' + this.selectedPost.id.toString() + '/comments';
       this.coreService.getData<Comment[]>(commentUrl)
       .subscribe((data: Comment[]) => {
         this.comments = data;
       });
  }

  goBack() {
    this.ActionGoBack.emit();
  }

}
