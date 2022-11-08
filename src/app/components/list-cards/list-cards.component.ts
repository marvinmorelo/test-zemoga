import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Thumb from 'src/app/interfaces/thumb.interface';
import { ThumbsService } from 'src/app/services/thumbs.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnInit, OnDestroy {

  thumbs: Thumb[] = [];
  thumbsSubscription: Subscription = new Subscription();

  typeList = 'grid';

  constructor(private thumbsService: ThumbsService) { }

  ngOnInit(): void {
    this.thumbsSubscription = this.thumbsService.getThumbs().subscribe((data: Thumb[]) => {
      this.thumbs = data;
    })
  }

  trackByItems(index: number, item: Thumb) {
    return item?.id;
  }

  ngOnDestroy(): void {
    this.thumbsSubscription.unsubscribe();
  }

}
