import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.css']
})
export class ChatCardComponent implements OnInit {
  @Input() chatName: string;
  @Input() chatID: string;
  @Input() chatImage: string;
  @Input() chatMessageLast: string;
  @Input() chatMessageTot: string;
  @Input() chatDate: any;
  convertedDate: any;

  constructor() { }

  ngOnInit() {
    this.convertedDate = this.chatDate.toDate();
  }

}
