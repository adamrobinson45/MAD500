import { Injectable } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

   isUpdate: string;

  constructor(updates: SwUpdate) {

    updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
      if (event.current < event.available){
        this.isUpdate = "Update available"
      }
    });
    updates.activated.subscribe(event => {
      console.log('Previous version:', event.previous);
      console.log('New version;', event.current);
    });

  }
}
