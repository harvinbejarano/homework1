import { Component } from '@angular/core';
import { Post } from './post/post.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
	title = 'Homework 1';
	selectedPost: Post;
	displayPost = true;

	constructor() {}

	getSelectedPost(postElement: Post) {
		this.selectedPost = postElement;
		this.displayPost = false;
	}
	goBack() {
		this.displayPost = true;
	}
}
