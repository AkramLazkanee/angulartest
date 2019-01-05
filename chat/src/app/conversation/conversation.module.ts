import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvoComponent } from './convo/convo.component';
import { ConversationRoutingModule } from './conversation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ConversationRoutingModule
  ],
  declarations: [ConvoComponent]
})
export class ConversationModule { }
