import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { commentinterface } from 'src/app/interfaces/comment-interface';

@Injectable({
  providedIn: 'root'
})
export class CommentSerivesService {

  constructor(private http: HttpClient) {}

  postComment(body: string, dateof: Date, appuserid: number, postid: number) {
    return this.http.post('https://localhost:7257/api/Commant', {
      body,dateof,appuserid, postid
    });
  }

  getComments(): Observable<commentinterface[]>{
    return this.http.get<commentinterface[]>('https://localhost:7257/api/Commant');

  }

  getComment(id: number):Observable<commentinterface[]>{
    return this.http.get<commentinterface[]>(`https://localhost:7257//api/Commant/${id}`);
  }
}
