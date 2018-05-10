import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'custom'})
export class CustomPipe implements PipeTransform{
    transform(value: Array<any>, fun){
        
        return fun(value)

    }
}