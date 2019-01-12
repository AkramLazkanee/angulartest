import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConversationService } from '../services/conversation.service';
import { Message } from '../models/message';

@Component({
  selector: 'app-convo',
  templateUrl: './convo.component.html',
  styleUrls: ['./convo.component.css']
})
export class ConvoComponent implements OnInit, AfterViewChecked {
  ngAfterViewChecked(): void {
    this.scrollToBottom()
  }
  ngAfterViewInit(): void {
    this.scrollToBottom()
  }

  private messages :Message[] = []
  private message :string
  private convo_id
  @ViewChild('content') content: ElementRef;

  constructor(private conversationsService:ConversationService, private route :ActivatedRoute, private router :Router) { }

  convo_title = ""

  ngOnInit() {

    this.convo_title = "convo"

    this.route.paramMap.subscribe(params=>{

      const Id = +params.get('id');
      if(!Id)return;
      console.log("Id");
      // console.log(Id);
      this.convo_id = Id
      this.conversationsService.getConversationMessages(Id)
      .subscribe(res=>{
        // console.log(res);
        this.messages=res

        this.scrollToBottom()
      })

    });



  }

  scrollToBottom() {
    try {
      this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight + 100;
    } catch (err) {}
  }

  addMessage(e) {
    e.preventDefault();
    // console.log(this.message)

    this.conversationsService.addConversationMessage(this.convo_id, this.message).subscribe(res=>{
      this.messages.push(res)
      this.message = ""
      this.scrollToBottom()


    })

  }

}
