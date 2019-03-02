import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  name: string;
  subTitle: string;
  profilePhoto: string;

  messages: {message: string; user: boolean, date: any}[];


  constructor() { }

  ngOnInit() {
    this.name = 'Ellen Dietz';
    this.subTitle = 'Online';
    this.profilePhoto = 'https://firebasestorage.googleapis.com/v0/b/leftlife1-e07e0.appspot.com/o/test%2F1550324574026_IMG_20170822_230002_848.jpg?alt=media&token=efe7d88b-d0b6-417e-bd8f-148f869d1c46';

    this.messages = [
      {
        message: 'Kommst du morgen zu unser Sitzung? Wir müssen noch etwas für den Wahlkampf besprechen!',
        user: true,
        date: '18:00'
      },
      {
        message: 'Hey klar! Ich habe doch Flyer organisiert. Außerdem wollte ich noch eine Idee besprechen. Hast du sie im Event gesehen?',
        user: false,
        date: '18:05'
      }

    ];
  }

}
