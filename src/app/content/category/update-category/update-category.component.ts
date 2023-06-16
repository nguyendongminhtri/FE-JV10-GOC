import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/Category";


@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  form: any = {};
  status = 'Form update Category';
  // @ts-ignore
  category: Category;

  constructor(private categoryService: CategoryService,
              @Inject(MAT_DIALOG_DATA)
              public data: any) {
  }

  updateCategory() {
    // @ts-ignore
    if(this.category.name?.trim()==''){
      this.status = 'The name is required!'
      return
    }

    // @ts-ignore
    this.categoryService.updateCategoryService(this.category?.id, this.category).subscribe(data => {
      if (data.message == 'name_existed') {
        this.status = 'The name is existed! Please try again!'
      } else if(data.message == 'update_success'){
        this.status = 'Update success!'
      }
    })
  }

  onUpload($event: string) {
    // @ts-ignore
    this.category.avatar = $event;
  }

  ngOnInit(): void {
    console.log('data --->', this.data.dataKey)
    this.categoryService.getCategoryById(this.data.dataKey).subscribe(data => {
      this.category = data;
      console.log('category -->', this.category)
    })

  }


}
