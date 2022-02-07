import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';

export const NOTES: Message[] = [
  {
    id: 1,
    name: 'Name',
    surname: 'Surname',
    authorPhoto: 'assets/images/ayo-ogunseinde.jpg',
    publishingDate: new Date('1995-12-17T03:24:00').getTime(),
    message:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 2,
    name: 'Name1',
    surname: 'Surname1',
    authorPhoto: 'assets/images/ben-parker.jpg',
    publishingDate: new Date('1995-12-17T03:24:00').getTime(),
    message:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 3,
    name: 'Name2',
    surname: 'Surname2',
    authorPhoto: 'assets/images/joseph-gonzalez.jpg',
    publishingDate: new Date('1995-12-17T03:24:00').getTime(),
    message:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: 4,
    name: 'Name3',
    surname: 'Surname3',
    authorPhoto: 'assets/images/matheus-ferrero.jpg',
    publishingDate: new Date('1995-12-17T03:24:00').getTime(),
    message:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
];

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(private _http: HttpClient) {}

  getMessages(): Observable<Message[]> {
    return this._http.get<Message[]>('../../../../assets/mock/messages.json');
  }
}
