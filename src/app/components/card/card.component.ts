import { Component, Input, OnInit } from '@angular/core';
import Thumb from 'src/app/interfaces/thumb.interface';
import * as moment from 'moment';
import { ThumbsService } from 'src/app/services/thumbs.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() thumb: Thumb | undefined;
  @Input() listType = 'list';

  buttonDisabled = true;
  copy = '';
  copyButton = 'Vote Now';
  thumpSelected = '';
  voteAgain = false;
  sendingVote = false;

  constructor(private thumbsService: ThumbsService) { }

  ngOnInit(): void {
    this.copy = moment(this.thumb?.createdAt).fromNow() + ' in ' + this.capitalize(this.thumb?.category);
  }

  capitalize(text: string = ''): string {
    return text[0].toUpperCase() + text.substring(1).toLowerCase();
  }

  setThumbVote(thumb: string) {
    this.thumpSelected = this.thumpSelected === thumb ? '' : thumb;
  }

  sendVote() {
    if (!this.voteAgain) {
      this.sendingVote = true;
      const idThumb = this.thumb?.id ?? '';
      this.thumbsService.updateThumbs(idThumb, this.thumpSelected === 'up').then((data) => {        
        this.copyButton = 'Vote Again';
        this.copy = 'Thank you for your vote!';
        this.voteAgain = true;
        this.sendingVote = false;
      })
    } else {
      this.voteAgain = false;
      this.copyButton = 'Vote Now';
      this.thumpSelected = '';
      this.copy = moment(this.thumb?.createdAt).fromNow() + ' in ' + this.capitalize(this.thumb?.category);
    }
  }

}
