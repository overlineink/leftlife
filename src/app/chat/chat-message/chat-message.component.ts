import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input() messageUser: boolean;
  @Input() messageText: string;
  @Input() messageDate: any;

  constructor() { }

  ngOnInit() {
  }

}
