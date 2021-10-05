import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'contentType'
})
export class ContentTypePipe implements PipeTransform {

  transform(contentList: Content[], filterWord: any) {

    if(filterWord == null){
      return contentList;
    }
    return contentList.filter(contentList => contentList.type == filterWord);

  }

}
