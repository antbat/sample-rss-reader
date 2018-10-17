import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue-colored',
  templateUrl: './blue-colored.component.html',
  styleUrls: ['./blue-colored.component.css']
})
export class BlueColoredComponent implements OnInit {
  blueColor = 'Component BLUE';

  ngOnInit() {
  }

}
