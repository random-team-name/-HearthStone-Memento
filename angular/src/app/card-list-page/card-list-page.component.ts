import { Component, OnInit } from '@angular/core';
import { HearthsoneCardsService } from '../providers/hearthsone-cards.service';
import sort from 'fast-sort';
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
  orderByFun= function(value){return value}
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

  filter(search, property = "name"){
    this.filterFun = function(cards) {
      const card= cards.filter(card => {
        if(card[property]){
          return card[property].toUpperCase().includes(search.toUpperCase())
        } return false
      })
      console.log('filter', cards.length)
      return card
    }
  }

  orderBy(order:string){
    this.filterFun = function (cards) {
      const card = sort(cards).asc((p) => {
        return p[order]
      });
      console.log('order', cards.length)
      return card
    }
  }
}
