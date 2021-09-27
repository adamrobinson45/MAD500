import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentList: Content[] = [{
      id: 1,
      author: "Adam",
      title: "My first",
      body: "The first body"
  }, {
      id: 2,
      author: "Steve",
      title: "this is the second title",
      body: "A lot of words in this second body"
  }, {
      id: 3,
      author: "Rob",
      title: "Third title ",
      body: "This is what comes after the third title, the third body"
  }, {
      id: 4,
      author: "Cole",
      title: "Fourth title is this",
      body: "One more hopefully"
  }, {
      id: 5,
      author: "Lucas",
      title: "The last title, maybe",
      body: "Have nothing left to say now"
  }];

  constructor() {

  }

  ngOnInit(): void {
  }

}
