import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ActivatedRoute} from "@angular/router";
import { ContentServiceService } from '../services/content-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id: number;
  content: any = {};
  contentService: ContentServiceService;
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

      this.route.paramMap.subscribe(parameters => {
          this.id = Number(parameters.get("id"));

          this.contentService.getContentItem(this.id).subscribe( c => {this.content = c;});
      });

  }

    goBack(): void {
        //this.location.back();
        this.router.navigate(['/content']);
  }
}
