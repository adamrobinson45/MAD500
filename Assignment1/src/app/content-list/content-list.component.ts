import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import { ContentTypePipe } from '../content-type.pipe';
import { FormsModule} from "@angular/forms";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
  providers: [ContentTypePipe],
})
export class ContentListComponent implements OnInit {
    message: string;

  contentList: Content[] = [{
      id: 1,
      author: "Adam",
      title: "My first",
      body: "The first body",
      imgUrl: 'https://nowthisiswhatiwouldcallmusic.files.wordpress.com/2015/06/1.png',
      type: "school"
  }, {
      id: 2,
      author: "Steve",
      title: "this is the second title",
      body: "A lot of words in this second body",
      type: "school"
  }, {
      id: 3,
      author: "Rob",
      title: "Third title ",
      body: "This is what comes after the third title, the third body",
      type: "school"
  }, {
      id: 4,
      author: "Cole",
      title: "Fourth title is this",
      body: "One more hopefully",
      type: "work"
  }, {
      id: 5,
      author: "Lucas",
      title: "The last title, maybe",
      body: "Have nothing left to say now",
      type: "work"
  }];

  constructor() {
    this.message = "";
  }

  ngOnInit(): void {
  }

}
