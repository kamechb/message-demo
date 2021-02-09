import { Injectable } from '@angular/core';

export interface Message {
  type: 'text' | 'image' | 'system';
  author?: string;
}

export interface MessageText extends Message {
  content: string;
}

export interface MessageImage extends Message {
  src: string;
}

export interface MessageSystem extends Message {
  content: string;
}

export type MessagesResponse = Array<MessageText | MessageImage | MessageSystem>;

@Injectable({ providedIn: 'root' })
export class MessageApi {
  getMessages(): MessagesResponse {
    return [
      { type: 'text', content: 'Matt，最近怎样? 😊', author: 'David' },
      { type: 'text', content: '嗯，挺好的!', author: 'Matt' },
      { type: 'image', src: '/assets/earth.jpg', author: 'Matt' },
      { type: 'text', content: '有空来找你玩！', author: 'David' },
      { type: 'text', content: '嗯，好啊，好久没见了!', author: 'Matt' },
      { type: 'system', content: 'David撤销了消息' },
      { type: 'system', content: 'David将Jack加入了群聊' },
    ];
  }
}
