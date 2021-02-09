import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageTextComponent } from './message-text/message-text.component';
import { MessageImageComponent } from './message-image/message-image.component';
import { MessageSystemComponent } from './message-system/message-system.component';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageTextComponent,
    MessageImageComponent,
    MessageSystemComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
