import { Directive, OnInit, ElementRef, Input, Renderer2, SimpleChanges, OnChanges, Output, EventEmitter } from "@angular/core";
import sort from 'fast-sort';

@Directive({
    selector: '[filterOrderby]'
})
export class OrderFilterDirective implements OnChanges  {

    @Input('search') search: string
    @Input('filterProperty') filterProperty: string
    @Input('orderProperty') orderProperty:string
    
    @Output('outFun') outFun = new EventEmitter<any>()
    constructor(){
        
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes)
        // this.outFun.emit(this.filter())
    }
    filter() {
        const search = this.search
        const propertyToSearch = this.filterProperty
        const orderProperty = this.orderProperty
        return function (cards) {
            cards = cards.filter(card => {
                if (card[propertyToSearch]) {
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


function isAnyPartOfElementInViewport(el,w) {

    const rect = el.getBoundingClientRect();
   
    const vertInView = (rect.top <= w.height) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= w.width) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}