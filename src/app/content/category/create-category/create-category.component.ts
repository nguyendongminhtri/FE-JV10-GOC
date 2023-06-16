import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from "../../../model/Category";
import {CategoryService} from "../../../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  form: any = {};
  category?:Category;
  status = 'Form Create Category'


  onUpload($event: string) {
    this.form.avatar = $event;
  }
constructor(private categoryService: CategoryService,
            private router: Router) {
}

  createCategory() {
    this.category = new Category(
      this.form.name,
      this.form.avatar
    )
    if(this.form.avatar==undefined){
      this.status = 'The avatar is required! Please choose upload avatar!'
    } else {
      this.categoryService.createCategory(this.category).subscribe(data =>{
        console.log('data --->', data)
        if(data.message=='name_existed'){
          this.status = 'The name is existed! Please try again!'
        } else if(data.message == 'creat_success') {
          this.status = 'Create Category Success!'

        }
      })
    }
  }



}
