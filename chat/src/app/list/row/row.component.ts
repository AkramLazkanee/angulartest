import { Component, OnInit, Input } from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input('contact') contact:Contact;
  constructor() { }

  ngOnInit() {
  }

}
