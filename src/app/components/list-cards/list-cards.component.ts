import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
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
  typeList = 'list';
  hideSelectListType = false;

  constructor(private thumbsService: ThumbsService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    this.hideSelectListType = event.target.innerWidth <= 578;
    this.typeList = event.target.innerWidth <= 578 ? 'grid' : 'list';
  }
  
  ngOnInit(): void {
    this.thumbsSubscription = this.thumbsService.getThumbs().subscribe((data: Thumb[]) => {
      this.thumbs = data;
    })
    this.hideSelectListType = window.innerWidth <= 578;
    this.typeList = window.innerWidth <= 578 ? 'grid' : 'list';
  }

  trackByItems(index: number, item: Thumb) {
    return item?.id;
  }

  ngOnDestroy(): void {
    this.thumbsSubscription.unsubscribe();
  }

}
