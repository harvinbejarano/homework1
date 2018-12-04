import { CommentComponent } from './comment.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [ CommentComponent ],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatCardModule,
		MatButtonModule,
	],
	exports: [ CommentComponent ],
})
export class CommentModule {}
