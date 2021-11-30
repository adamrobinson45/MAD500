import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    this.messageService.addMessage("Content Retrieved!");
    return this.http.get<Content[]>("api/coconuts");
  }
  getContentItem(id: number): Observable<Content>{
    return this.http.get<Content>("api/content/" + id);
  }
  postContent(newCoconut: Content): Observable<Content> {
    this.messageService.addMessage("Content added!");
    return this.http.post<Content>("api/coconuts", newCoconut, this.httpOptions);
  }
  putContent(newCoconut: Content): Observable<any> {
    this.messageService.addMessage("Content added!");
    return this.http.put("api/coconuts", newCoconut, this.httpOptions);
  }
}
