import { Component, OnInit } from '@angular/core';

import { MessageApi } from './message-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ring-central';
  messages: any[];

  constructor(private messageApi: MessageApi) {}

  ngOnInit() {
    this.messages = this.messageApi.getMessages();
  }
}
