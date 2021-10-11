import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentList} from "../helper-files/content-list";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

    type = "";

    @Input() content: any;
    constructor() {
        this.content= {};
    }

    ngOnInit(): void {
    }

    showId(): void {
        console.log(this.content.id);
    }
}