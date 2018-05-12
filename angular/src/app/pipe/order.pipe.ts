import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'order', pure:false})
export class OrderPipe implements PipeTransform{
    transform(value: Array<any>, fun) {
        return fun(value)
    }
}