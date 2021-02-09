import { Component, Input, OnInit } from '@angular/core';

import { MessageText } from '../message-api';
import { MessageComponent } from '../message-component.interface';

@Component({
  selector: 'app-message-text',
  templateUrl: './message-text.component.html',
  styleUrls: ['./message-text.component.scss'],
})
export class MessageTextComponent implements OnInit, MessageComponent {
  @Input() message: MessageText;

  constructor() {}

  ngOnInit(): void {}
}
