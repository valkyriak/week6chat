import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SocketService } from './services/socket.service'

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
