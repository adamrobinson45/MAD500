
import {Content} from "./content-interface";

export class ContentList{

    private _items: Content[];


    constructor() {
        this._items = [];

    }

    get items(): Content[] {
        return this._items;
    }

     public add(item: Content) {
      this._items.push(item);
     }

     public numberOfArray(array: []){
        return array.length;
     }

     public getReaderFriendly(number: number){
        return 'Id: ' + this._items[number].id
         + ' Author: ' + this._items[number].author
         + ' title: ' + this._items[number].title
         + ' body: ' + this._items[number].body

     }


}