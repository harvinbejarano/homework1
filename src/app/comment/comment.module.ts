import { CommentComponent } from './comment.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CommentComponent],
  imports: [
    CommonModule
  ],
  exports: [CommentComponent],
})
export class CommentModule { }
