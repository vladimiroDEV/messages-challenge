import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable()
export class MessagesService {
  constructor(private _http: HttpClient) {}

  getMessages(): Observable<Message[]> {
    return this._http.get<Message[]>('../../../../assets/mock/messages.json');
  }
}
