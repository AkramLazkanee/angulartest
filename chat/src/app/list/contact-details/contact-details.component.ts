import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  updateDetails: FormGroup;
  btn_pressed = false;
  details: Contact = new Contact();
  id: number;
  constructor(private ContactsService: ContactsService, private route: ActivatedRoute, private fb: FormBuilder, private mRouter: Router) { 


  }

  getContactsDetails(id) {
    this.ContactsService.getContactsDetails(id).subscribe(details => this.details = details)
  }

  ngOnInit() {
    this.updateDetails = this.fb.group({
      first: ['', Validators.required],
      last: ['', Validators.required],
      phone: ['', Validators.required],
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
        this.ContactsService.putContactsDetails(this.updateDetails.value.first, this.updateDetails.value.last, this.updateDetails.value.phone, this.id).subscribe(
          () => {
            this.mRouter.navigate(['/list/contacts']);
          }
        )
      } else {
        this.ContactsService.postContactsDetails(this.updateDetails.value.first, this.updateDetails.value.last, this.updateDetails.value.phone).subscribe(
          () => {
            this.mRouter.navigate(['/list/contacts']);
          }
        )
      }
      this.updateDetails.reset();
      this.btn_pressed = false;
    }
  }



}

