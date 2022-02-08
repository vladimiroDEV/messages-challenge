import {
  AfterViewChecked,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Message } from './models/message.model';
import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private messagesScrollContainer: ElementRef;
  loadedOnce = false;
  showBlurContainer = true;
  messaggesList: Message[] = [];
  storageKey = 'messagesskey';

  constructor(
    private _messagesService: MessagesService,
    private _storageService: StorageService
  ) {}

  ngAfterViewChecked(): void {
    // need for prevent further  scrolling after click to read more button
    if (!this.loadedOnce) this.scrollToBottom();
    this.loadedOnce = true;
  }

  ngOnInit() {
    let messagessInStorage = this._storageService.get<Message[]>(
      this.storageKey
    );
    if (messagessInStorage != null) {
      this.messaggesList = messagessInStorage;
    } else {
      this._messagesService.getMessages().subscribe((data: Message[]) => {
        this.messaggesList = data;
        this._storageService.store<Message[]>(this.storageKey, data);
      });
    }
    this.sort();
  }
  @HostListener('window:scroll', [])
  onScroll(event): void {
    if (this.messagesScrollContainer.nativeElement.scrollTop === 0) {
      this.showBlurContainer = false;
    } else {
      this.showBlurContainer = true;
    }
  }

  onMessageAdd(msg: Message): void {
    // add message
    this.messaggesList.push(msg);
    this._storageService.store<Message[]>(this.storageKey, this.messaggesList);
    this.sort();

    setTimeout(() => {
      this.scrollToBottom();
    }, 0.8);
  }
  onInputFilter(filter: string) {
    if (filter !== '') {
      this.messaggesList = this._storageService
        .get<Message[]>(this.storageKey)
        .filter(
          (m) =>
            m.surname.toLowerCase().includes(filter.toLocaleLowerCase()) ||
            m.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        );
    } else {
      this.messaggesList = this._storageService.get<Message[]>(this.storageKey);
    }
  }

  sort() {
    this.messaggesList = this.messaggesList.sort(
      (a, b) => a.publishingDate - b.publishingDate
    );
  }

  scrollToBottom(): void {
    try {
      this.messagesScrollContainer.nativeElement.scrollTop =
        this.messagesScrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
