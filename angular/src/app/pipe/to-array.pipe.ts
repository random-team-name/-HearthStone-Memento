import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'toArray'})
export class ToArrayPipe implements PipeTransform{
    transform(value, args){
        return Object.keys(value).map(key=> {
            const obj:any = {}
            obj.key = key
            obj.data = value[key]
            return obj
        })

    }
}