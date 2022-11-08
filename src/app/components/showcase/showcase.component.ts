import { Component, OnInit } from '@angular/core';
import Thumb from 'src/app/interfaces/thumb.interface';
import { ThumbsService } from '../../services/thumbs.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  featuredThumb: Thumb | undefined;

  constructor(private thumbsService: ThumbsService) { }

  ngOnInit(): void {
    this.thumbsService.getFeaturedThumb().subscribe(data => this.featuredThumb = data[0]);
  }

}
