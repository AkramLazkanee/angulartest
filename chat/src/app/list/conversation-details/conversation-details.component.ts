import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConversationsService } from '../conversations.service';
import { Conversation } from '../conversation';


@Component({
  selector: 'app-conversation-details',
  templateUrl: './conversation-details.component.html',
  styleUrls: ['./conversation-details.component.css']
})
export class ConversationDetailsComponent implements OnInit {
  updateDetails: FormGroup;
  btn_pressed = false;
  details: Conversation = new Conversation();
  id: number;
  constructor(private ConversationsService: ConversationsService, private route: ActivatedRoute, private fb: FormBuilder, private mRouter: Router) { 


  }

  getContactsDetails(id) {
    this.ConversationsService.getConversationsDetails(id).subscribe(details => this.details = details)
  }

  ngOnInit() {
    this.updateDetails = this.fb.group({
      first: ['', Validators.required],
    });
    this.route.paramMap.subscribe(params => {
      const Id = +params.get('id');
      if (!Id) return;
      this.id = Id;
      this.getContactsDetails(this.id);

    });
  }
  get getForm() {
    return this.updateDetails.controls;
  }

  onClick() {
    this.btn_pressed = true;
    if (this.updateDetails.invalid) {
      return;
    } else {
      if (this.id) {
        this.ConversationsService.putConversationsDetails(this.updateDetails.value.first, this.id).subscribe(
          () => {
            this.mRouter.navigate(['/list/conversations']);
          }
        )
      } else {
        this.ConversationsService.postConversationsDetails(this.updateDetails.value.first).subscribe(
          () => {
            this.mRouter.navigate(['/list/conversations']);
          }
        )
      }
      this.updateDetails.reset();
      this.btn_pressed = false;
    }
  }



}

