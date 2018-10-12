import { Component } from '@angular/core';
import { RssService } from './rss.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-client';
  constructor(private rssService: RssService) {
    console.log('I am working !!!');
    this.rssService
      .getData()
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.error(error);
        }
      );
  }
}
