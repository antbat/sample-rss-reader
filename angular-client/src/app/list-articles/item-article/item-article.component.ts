import { Component, OnInit, Input } from '@angular/core';
import { Rss } from 'src/app/rss.model';

@Component({
  selector: 'app-item-article',
  templateUrl: './item-article.component.html',
  styleUrls: ['./item-article.component.css']
})
export class ItemArticleComponent implements OnInit {

  @Input() data: Rss;

  constructor() { }

  ngOnInit() {
  }

}
