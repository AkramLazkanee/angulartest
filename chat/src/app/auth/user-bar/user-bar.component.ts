import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.css']
})
export class UserBarComponent implements OnInit {
  name: string;
  constructor(private sharedService: SharedService) {
    this.name = this.sharedService.loggedInUser.userName
  }

  ngOnInit() {
  }

}
