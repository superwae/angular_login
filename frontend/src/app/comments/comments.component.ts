import { CommentSerivesService } from './../shared/comment-serives/comment-serives.service';
import { Component, OnInit } from '@angular/core';
import { commentinterface } from '../interfaces/comment-interface';
import { globals } from '../shared/globalData';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CommentsComponent implements OnInit {
  commentList: commentinterface[] = [];
  filteredComments: commentinterface[] = [];
  constructor(private comment_service: CommentSerivesService, private router: Router) { }
  ngOnInit() {
    this.loadcomments();
  }
  loadcomments(){
    this.comment_service.getComments().subscribe(
      (result: commentinterface[]) => {
        this.commentList = result;
        for (const element of this.commentList) {
         if(element.postid===globals.curr_post_id)
         {
          this.filteredComments.push(element);
         }
        }

      },
      (err) => {
        console.error("Error fetching comments: ", err);
      }
    );
  }
  goToPostsPage() {
    this.router.navigate(['/posts']);
  }
  }

