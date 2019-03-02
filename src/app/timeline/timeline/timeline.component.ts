import { Component, OnInit } from '@angular/core';
import { Post } from '@models/post.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  posts: Post[];
  collapsed: boolean;

  constructor() {
    this.posts = [
      {
        'author': 'Tobias Hassebrock',
        'location': 'Deggendorf',
        'image': 'assets/img/Europa.jpg',
        'profImage': 'assets/img/Tobi.jpg',
        'text': 'Wir fordern eine europäische Republik, die in einer globalisierten Weltwirtschaft für Gerechtigkeit sorgt.',
        'likes': '78',
        'comments': '',
        'hashtags': [
          {
            'hashtag': 'Europa'
          },
          {
            'hashtag': 'Republik'
          },
        ],
        'date': '',
        'postType': 'idea',
      },
      {
        'author': 'Fabian Hassebrock',
        'location': 'München',
        'image': 'assets/img/Uni.jpg',
        'profImage': 'assets/img/leftlife.png',
        'text': 'Bildung muss für alle da sein und daher unabhängigk vom Geld der Eltern sein. Wir fordern...',
        'likes': '134',
        'comments': '',
        'hashtags': [
          {
            'hashtag': 'Bildung'
          },
          {
            'hashtag': 'Niedersachsen'
          },
        ],
        'date': '',
        'postType': 'idea',
      },
      {
        'author': 'Eckhard Hassebrock',
        'location': 'Rosbach',
        'image': 'assets/img/background.jpg',
        'profImage': 'assets/img/Eckhard.jpg',
        'text': 'Die SPD braucht endlich eine Plattform um digital arbeiten zu können. Nur wer Digitalisierung vorlebt ist glaubthaft',
        'likes': '93',
        'comments': '',
        'hashtags': [
          {
            'hashtag': 'SPD'
          },
          {
            'hashtag': 'ParteiKultur'
          },
        ],
        'date': '',
        'postType': 'idea',
      },
    ];
   }

  ngOnInit() {
  }

}
