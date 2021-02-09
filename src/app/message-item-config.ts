import { MessageImageComponent } from './message-image/message-image.component';
import { MessageSystemComponent } from './message-system/message-system.component';
import { MessageTextComponent } from './message-text/message-text.component';

export const MessageItemConfig = {
  text: MessageTextComponent,
  image: MessageImageComponent,
  system: MessageSystemComponent,
};
