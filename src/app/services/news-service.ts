import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn:'root'
})
export class NewsService
{
  
  constructor(private http: HttpClient)
  {
  
  }

  getNews()
  {
    return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&apikey=31510b83ca494f6792e15d4954ffe9d4').pipe(map(res =>{return res}));
  }


}
