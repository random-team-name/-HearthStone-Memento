import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/**
 * card = { 
 *   cardId
 *   cardSet
 *   collectible
 *   dbfId
 *   faction
 *   health
 *   img
 *   imgGold
 *   locale
 *   name
 *   playerClass
 *   rarity
 *   type
 * }
 */
@Injectable({
  providedIn: 'root'
})
export class HearthsoneCardsService {
  constructor(private http: HttpClient) {}
  
  allCards(){
    return this.http.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1", {
      headers:{
        "X-Mashape-Key": "iO8OmOZSY0mshfFfuJjYgUdFhzqkp1K34y0jsnAwyegP4Ge2O6"
      }
    }).toPromise().then(data=>{
      const array = []
      Object.keys(data).map(key=>{
        array.push(...data[key])
      })
      return array
    })
  }
}
