import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yellow-colored',
  templateUrl: './yellow-colored.component.html',
  styleUrls: ['./yellow-colored.component.css']
})
export class YellowColoredComponent implements OnInit {

  yellowColor = 'Component \"Yellow\"';

  ngOnInit() {
  }

}
