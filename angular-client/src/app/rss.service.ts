import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rss } from './rss.model';

@Injectable({
  providedIn: 'root'
})
export class RssService {

  constructor( private http: HttpClient ) { }
  getData(): Observable<Rss[]> {
    console.log('getData method has started in RSS service');
    return this.http.get<Rss[]>('http://localhost:4707/getrss');
  }
}
