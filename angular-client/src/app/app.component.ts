import { Component } from '@angular/core';
import { RssService } from './rss.service';
import { Rss } from './rss.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-client';
  rss: Rss[];
  constructor(private rssService: RssService) {
    console.log('I am working !!!');
    this.rssService
      .getData()
      .subscribe(
        data => {
          this.rss = data;
          console.log('I have got data', data);
        },
        error => {
          console.error(error);
        }
      );
  }
}
