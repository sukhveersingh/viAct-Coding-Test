import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'newsFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value:any, args?: any): any 
  {
    if (!args) {
      return value;
    }
    return value.filter((item:any) => {
        console.log(args)
      let rVal:any = (item.title.toLocaleLowerCase().includes(args)) || (item.title.toLocaleLowerCase().includes(args));
      console.log(args)
      return rVal;
    })

  }

}