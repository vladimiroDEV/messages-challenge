import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
})
export class MessageBoxComponent implements OnInit {
  currentName = 'Vlad';
  currentSurname = 'Cherney';

  @Input() message: Message = {
    id: -1,
    name: '',
    surname: '',
    authorPhoto: '',
    publishingDate: undefined,
    message: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
