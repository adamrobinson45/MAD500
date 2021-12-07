import { Component } from '@angular/core';
import {ContentServiceService} from "./services/content-service.service";
import {LogUpdateService} from "./log-update.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MusicSite';


    constructor(private contentService: ContentServiceService, private logService: LogUpdateService, private snackBar: MatSnackBar) {

    }

    openSnackBar(){
      this.snackBar.open(this.logService.isUpdate);
    }



}
