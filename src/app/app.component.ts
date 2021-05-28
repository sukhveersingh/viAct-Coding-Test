import { Component } from '@angular/core';
import { NewsService } from './services/news-service';
import { PagerService } from './services/pager-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pager: any = {};
  pagedItems:any=[];
  title = '';
  result=[];
  count=0;
  data=[];
  toggle=false

  constructor(private service:NewsService,private pagerService:PagerService){}

  ngOnInit(){
    this.getNews()
  }

  getNews()
  {
    this.service.getNews().subscribe((res:any)=>{
      if(res.status=='ok'){
        this.data=res.articles
        this.result=res.articles;
        this.setPage(1);
      }
      else{
        alert('no data found')
      }
    })
}



setPage(page: number) {
  this.pager = this.pagerService.getPager(this.result.length, page);
  this.pagedItems = this.result.slice(this.pager.startIndex,this.pager.endIndex + 1);
}


filterData(val:any)
{
  if(val==false)
  {
    this.pagedItems.sort(function(a:any,b:any)
    {
      let d1:any=new Date(a.publishedAt);
      let d2:any=new Date(b.publishedAt);
      return d1-d2
    })

    this.toggle=true;
  }
  else{
    this.pagedItems.sort(function(a:any,b:any)
    {
      let d1:any=new Date(a.publishedAt);
      let d2:any=new Date(b.publishedAt);
      return d2-d1
    })

    this.toggle=false;
  }
}

}
