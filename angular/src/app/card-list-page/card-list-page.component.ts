import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('orderBySelect') orderBySelect: ElementRef
  @ViewChild('filterBySelect') filterBySelect: ElementRef
  @ViewChild('filterInput') filterInput: ElementRef
  filterFunorderByFun = function(value){return value}
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

  filter(){
    const search = this.filterInput.nativeElement.value
    const propertyToSearch = this.filterBySelect.nativeElement.value
    const orderProperty = this.orderBySelect.nativeElement.value
    this.filterFunorderByFun = function(cards) {
      cards = cards.filter(card => {
        if(card[propertyToSearch]){          
          return card[propertyToSearch].toUpperCase().includes(search.toUpperCase())
        } return false
      })

      console.log(search, propertyToSearch, orderProperty)
      cards = sort(cards).asc((p) => {
        return p[orderProperty]
      });
      return cards
    }
  }
}
