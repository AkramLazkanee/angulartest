import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConversationService } from '../services/conversation.service';
import { Message } from '../models/message';

@Component({
  selector: 'app-convo',
  templateUrl: './convo.component.html',
  styleUrls: ['./convo.component.css']
})
export class ConvoComponent implements OnInit {

  private messages :Message[]

  constructor(private conversationsService:ConversationService, private route :ActivatedRoute, private router :Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      const Id = +params.get('id');
      if(!Id)return;
      // console.log(Id);
      this.conversationsService.getConversationMessages(Id)
      .subscribe(res=>{
        // console.log(res);
        this.messages=res
      })

    });


  }

}
