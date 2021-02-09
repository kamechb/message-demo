import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { MessagesResponse } from '../message-api';
import { MessageComponent } from '../message-component.interface';
import { MessageItemConfig } from '../message-item-config';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
})
export class MessageListComponent implements OnInit {
  @Input() messages: MessagesResponse;
  @ViewChild('messageList', { read: ViewContainerRef, static: true })
  messageListContainer: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    const messageComponentMap = this.messages.map((message) => ({
      data: message,
      component: MessageItemConfig[message.type],
    }));

    messageComponentMap.forEach((message) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory<MessageComponent>(
        message.component,
      );
      const componentRef = this.messageListContainer.createComponent<MessageComponent>(
        componentFactory,
      );
      componentRef.instance.message = message.data;
    });
  }
}
