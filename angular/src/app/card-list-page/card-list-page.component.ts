import { Component, OnInit } from '@angular/core';
import { HearthsoneCardsService } from '../providers/hearthsone-cards.service';

@Component({
  selector: 'app-card-list-page',
  templateUrl: './card-list-page.component.html',
  styleUrls: ['./card-list-page.component.scss']
})
export class CardListPageComponent implements OnInit {
  cards: any= []
  constructor(private cardsService: HearthsoneCardsService) { }
  hoverIndex = -1
  ngOnInit() {
    
    this.cardsService.allCards().then(data=>{
      console.log(data)
      this.cards = data
    })
  }

}
