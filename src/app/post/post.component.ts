import { CoreService } from '../core.service';
import { Post } from './post.interface';
import {
	Component,
	EventEmitter,
	OnInit,
	Output,
} from '@angular/core';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: [ './post.component.scss' ],
})
export class PostComponent implements OnInit {
	posts: Post[];
	postUrl = 'https://jsonplaceholder.typicode.com/posts';
	@Output() selectPost = new EventEmitter<Post>();
	constructor(private coreService: CoreService) {}

	ngOnInit() {
		this.getAllPost();
	}

	getAllPost() {
		this.coreService
			.getData<Post[]>(this.postUrl)
			.subscribe((data: Post[]) => {
				this.posts = data;
			});
	}

	setSelectPost(post: Post) {
		this.selectPost.emit(post);
	}
}
