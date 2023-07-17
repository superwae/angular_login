import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { postinterface } from 'src/app/interfaces/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostServicesService {

  constructor(private http: HttpClient) {

  }
  
  PostPost(body: string, titlte: string, appuserid: number) {
    return this.http.post('https://localhost:7257/api/Post', {
      body, titlte, appuserid
    });
  }

  gettPosts(): Observable<postinterface[]> {
      return this.http.get<postinterface[]>('https://localhost:7257/api/Post');
  }

  gettPost(id: number) {
    return this.http.get(`https://localhost:7257/api/Post/${id}`);
  }
}
