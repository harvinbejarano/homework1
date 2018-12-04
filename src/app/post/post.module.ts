import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';

@NgModule({
	declarations: [ PostComponent ],
	imports: [ CommonModule, MatCardModule ],
	exports: [ PostComponent ],
})
export class PostModule {}
