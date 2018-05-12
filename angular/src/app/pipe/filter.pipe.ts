import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'filter', pure:true})
export class FilterPipe implements PipeTransform{
    transform(value: Array<any>, fun){
        return fun(value)
    }
}