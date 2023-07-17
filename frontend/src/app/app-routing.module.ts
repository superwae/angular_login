import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "comment",
    component: CommentComponent
  },
  {
    path: "post",
    component: PostComponent
  },
  {
    path: "comments",
    component: CommentsComponent
  },
  {
    path: "posts",
    component: PostsComponent
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
