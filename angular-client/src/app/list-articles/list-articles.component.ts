import { Component, OnInit } from '@angular/core';
import { Rss } from '../rss.model';
import { RssService } from '../rss.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  rssList: Rss[];

  constructor(private rssService: RssService) {
    this.rssService
      .getData()
      .subscribe(
        data => {
          this.rssList = data;
          console.log('I have got data', data);
        },
        error => {
          console.error(error);
        }
      );
  }
  ngOnInit() {
  }

}
