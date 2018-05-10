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
  paginationMin = 0
  paginationMax = 16
  pageSize = 16
  filterFun = function(value){return value}
  ngOnInit() {
    this.cardsService.allCards().then(data=>{
      console.log(data)
      this.cards = data
    })
  }

  next() {
    if (this.paginationMin + this.pageSize > this.cards.length) {
      this.paginationMax -= this.cards.length
      this.paginationMin -= this.cards.length
      return
    }
    this.paginationMax += this.pageSize
    this.paginationMin += this.pageSize
  }
  previous() {
    if(this.paginationMin - this.pageSize < 0 ){
      this.paginationMax -= 0
      this.paginationMin -= 0
      return
    }
    this.paginationMax -= this.pageSize
    this.paginationMin -= this.pageSize
  }

  filter(search){
    this.filterFun = function(cards) {
      return cards.filter(card => {
        if(card.name){
          return card.name.toUpperCase().includes(search.toUpperCase())
        } return false
      })
    }
  }
}
