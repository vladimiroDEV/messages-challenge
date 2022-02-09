import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-messages',
  templateUrl: './filter-messages.component.html',
  styleUrls: ['./filter-messages.component.scss'],
})
export class FilterMessagesComponent implements OnInit {
  @Output() filter = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  /**
   *
   * @param filter search parameter
   */
  filterInput(filter: any) {
    this.filter.emit(filter.target.value);
  }
}
