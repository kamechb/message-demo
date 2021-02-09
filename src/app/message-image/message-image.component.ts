import { Component, Input, OnInit } from '@angular/core';

import { MessageImage } from '../message-api';
import { MessageComponent } from '../message-component.interface';

@Component({
  selector: 'app-message-image',
  templateUrl: './message-image.component.html',
  styleUrls: ['./message-image.component.scss'],
})
export class MessageImageComponent implements OnInit, MessageComponent {
  @Input() message: MessageImage;

  constructor() {}

  ngOnInit(): void {}
}
