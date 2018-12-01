import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommentComponent } from './comment/comment.component';
import { CoreService } from './core.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
