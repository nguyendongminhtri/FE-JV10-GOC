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
  checkCreate = false;
  setCheckCreate(checkCreate: boolean){
    this.checkCreate =  checkCreate;
  }
  getCheckCreate(){
    return this.checkCreate;
  }
}
