import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvoComponent } from './convo/convo.component';
import { ConversationRoutingModule } from './conversation-routing.module';
import { MessageComponent } from './message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ConversationRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [ConvoComponent, MessageComponent]
})
export class ConversationModule { }
