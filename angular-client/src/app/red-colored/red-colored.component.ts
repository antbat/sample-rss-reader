import { Component, OnInit, Input } from '@angular/core';
import { RedColored } from 'Models/red-colored.model';
@Component({
  selector: 'app-red-colored',
  templateUrl: './red-colored.component.html',
  styleUrls: ['./red-colored.component.css']
})
export class RedColoredComponent implements OnInit {
  redColor = '\"One side Binding\" is used here';
  redColored: RedColored = {
    id: 1,
    name: 'RED' 
  };

  ngOnInit() {
  }

}
