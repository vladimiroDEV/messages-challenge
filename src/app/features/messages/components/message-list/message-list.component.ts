import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message.model';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];
  constructor(private _messagesService: MessagesService) {}

  ngOnInit(): void {
    this.getMessagess();
  }

  getMessagess(): void {
    this.messages = this._messagesService.getMessagess();
  }
}
