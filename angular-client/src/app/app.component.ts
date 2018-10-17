import { Component } from '@angular/core';
import { RssService } from './rss.service';
import { Rss } from './rss.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'title of root component';
  constructor() {
    console.log('I am working !!!');
  }
}
