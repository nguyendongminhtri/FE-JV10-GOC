import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Category} from "../model/Category";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  //API LOCAL
private API_CATEGORY = environment.API_LOCAL+'category';
  constructor(private httpClient: HttpClient) { }
  createCategory(category: Category) : Observable<any>{
    return this.httpClient.post(this.API_CATEGORY, category);
  }
  getListCategory(): Observable<any>{
    return this.httpClient.get(this.API_CATEGORY);
  }
  getCategoryById(id: number): Observable<any>{
    return this.httpClient.get(this.API_CATEGORY+'/'+id)
    // return this.httpClient.get(`${this.API_CATEGORY}/${id}`)
  }
  updateCategoryService(id:number, category:Category): Observable<any>{
    return this.httpClient.put(this.API_CATEGORY+'/'+id, category)
  }
  // getPageCategory(request: any): Observable<any>{
  //   const params = request;
  //   return this.httpClient.get(this.API_CATEGORY+'/page',{params})
  // }
  getPageCategory(request: any){
    const params = request;
    return this.httpClient.get(this.API_CATEGORY+'/page',{params})
  }
}
