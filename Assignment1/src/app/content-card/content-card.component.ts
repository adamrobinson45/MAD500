import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentList} from "../helper-files/content-list";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

    list = new ContentList();


    first: Content = {
        id: 0,
        author: 'adam',
        title: 'first',
        body: 'first body'
    }
    second: Content = {
        id: 0,
        author: 'steve',
        title: 'second',
        body: 'second body'
    }
    third: Content = {
        id: 0,
        author: 'rob',
        title: 'third',
        body: 'third body'
    }

    constructor() {
    }

    ngOnInit(): void {
        this.list.add(this.first);
        this.list.add(this.second);
        this.list.add(this.third);
    }
}