import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/Category";
import {CategoryService} from "../../service/category.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.css']
})
export class PageCategoryComponent implements OnInit{
  // totalElements: number = 0;
  // categories?: Category[];
  // loading: boolean;
  // searchText;
  totalElements: number =0;
  categories?: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    // this.getPageRequest({page: 0, size: 3});
    this.getPageRequest({page:0, size: 3})
  }
  // private getPageRequest(request: any) {
  //   // this.loading = true;
  //   this.categoryService.getPageCategory(request)
  //     .subscribe(data => {
  //         console.log('request trent get list -->', request)
  //         this.categories = data['content'];
  //         console.log('category', data);
  //         this.totalElements = data['totalElements'];
  //         console.log('total -->', this.totalElements)
  //         // this.loading = false;
  //       }
  //       // , error => {
  //       //   // this.loading = false;
  //       // }
  //     );
  // }
getPageRequest(request: any){
    this.categoryService.getPageCategory(request).subscribe(data =>{
      // @ts-ignore
      this.categories = data['content'];
      // @ts-ignore
      this.totalElements = data['totalElements'];
    })
}
nextPage(event: PageEvent){
    const request = {};
    // @ts-ignore
  request['page'] = event.pageIndex.toString();
    // @ts-ignore
  request['size'] = event.pageSize.toString();
  this.getPageRequest(request);
}
  // nextPage(event: PageEvent) {
  //   const request = {};
  //
  //   // @ts-ignore
  //   request['page'] = event.pageIndex.toString();
  //   console.log('page -->', event.pageIndex.toString())
  //   // @ts-ignore
  //   request['size'] = event.pageSize.toString();
  //   console.log('size -->', event.pageSize.toString())
  //   console.log('request -->', request)
  //   this.getPageRequest(request);
  // }
}
