import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.css']
})
export class UserBarComponent implements OnInit {
  first: string;
  last: string;
  
  constructor(private sharedService: SharedService) {
    this.first = this.sharedService.loggedInUser.FirstName;
    this.last = this.sharedService.loggedInUser.LastName;
  }

  ngOnInit() {
  }

}
