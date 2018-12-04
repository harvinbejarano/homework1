import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommentComponent } from './comment/comment.component';
import { CommentModule } from './comment/comment.module';
import { CoreService } from './core.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostModule } from './post/post.module';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatButtonModule,
		PostModule,
		CommentModule,
	],
	providers: [ CoreService ],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
