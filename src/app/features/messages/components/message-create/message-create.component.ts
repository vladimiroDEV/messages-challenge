import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.scss'],
})
export class MessageCreateComponent implements OnInit {
  form: FormGroup;
  @Output() onMessageAdd = new EventEmitter<Message>();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      message: ['', Validators.compose([])],
    });
  }

  submit(): void {
    if (this.form.value.message && this.form.value.message !== '') {
      let m: Message = {
        id: 1,
        authorPhoto: 'assets/images/jason-leung.jpg',
        name: 'Vlad',
        surname: 'Cherney',
        publishingDate: Date.now(),
        message: this.form.value.message,
      };
      // add message
      this.onMessageAdd.emit(m);

      this.form.reset();
    }
  }
}
