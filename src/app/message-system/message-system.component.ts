import { Component, Input, OnInit } from '@angular/core';

import { MessageSystem } from '../message-api';
import { MessageComponent } from '../message-component.interface';

@Component({
  selector: 'app-message-system',
  templateUrl: './message-system.component.html',
  styleUrls: ['./message-system.component.scss'],
})
export class MessageSystemComponent implements OnInit, MessageComponent {
  @Input() message: MessageSystem;

  constructor() {}

  ngOnInit(): void {}
}
