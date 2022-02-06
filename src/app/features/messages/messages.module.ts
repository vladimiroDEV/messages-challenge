import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { MessagingRoutingModule } from './messagess-routing.module';
import { MessageListComponent } from './components/message-list/message-list.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MessageCreateComponent } from './components/message-create/message-create.component';

@NgModule({
  declarations: [MessagesComponent, MessageBoxComponent, MessageListComponent, MessageCreateComponent],
  imports: [CommonModule, MessagingRoutingModule, SharedModule],
})
export class MessagesModule {}
