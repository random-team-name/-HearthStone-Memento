import { Directive, OnInit, ElementRef, Input, Renderer2 } from "@angular/core";
import { CommonService } from "../../core/providers/common.service";
import { debounce, debounceTime } from "rxjs/operators";

@Directive({
    selector: '[lazyLoading]'
})
export class LazyLoading implements OnInit   {

    @Input('img') img: string
    @Input('imgError') imgError:string
    constructor(private el: ElementRef, private common: CommonService, private renderer: Renderer2){
    }
    ngOnInit(): void {
        const w = {
            height: (window.innerHeight || document.documentElement.clientHeight),
            width: (window.innerWidth || document.documentElement.clientWidth)
        }
        if (isAnyPartOfElementInViewport(this.el.nativeElement, w))
            this.renderer.setAttribute(this.el.nativeElement, 'src', this.img || this.imgError)
        this.common.scrollSubject.pipe(
            debounceTime(500)
        )
        .subscribe(_=>{
            console.log('lkjkl')
            // if(isAnyPartOfElementInViewport(this.el.nativeElement, w))
            //     this.renderer.setAttribute(this.el.nativeElement, 'src', this.img || this.imgError)
        })
    }
}


function isAnyPartOfElementInViewport(el,w) {

    const rect = el.getBoundingClientRect();
   
    const vertInView = (rect.top <= w.height) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= w.width) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}