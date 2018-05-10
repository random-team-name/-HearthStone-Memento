import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'pagination'})
export class PaginationPipe implements PipeTransform{
    transform(value: Array<any>, min: number,max: number){

        return value.slice(min, max)

    }
}