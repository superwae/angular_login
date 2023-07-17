import { Component, OnInit } from '@angular/core';
import { postinterface } from '../interfaces/post-interface';
import { PostServicesService } from '../shared/post-serives/post-services.service';
import { Router } from '@angular/router';
import { globals } from '../shared/globalData';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postlist: postinterface[] = [];

  constructor(private postService: PostServicesService, private router: Router) {}
  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.gettPosts().subscribe(
      (result: postinterface[]) => {
        this.postlist = result;
      },
      (err) => {
        console.error("Error fetching posts: ", err);
      }
    );
  }
  fetchComments(appuserid:number)
  {
    console.log("it works")
    globals.curr_post_id=appuserid;
    this.router.navigate(['/comments']);
  }
}
