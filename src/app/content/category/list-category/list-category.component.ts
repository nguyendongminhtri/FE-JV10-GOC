import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateCategoryComponent} from "../create-category/create-category.component";
import {TokenService} from "../../../service/token.service";
import {Category} from "../../../model/Category";
import {CategoryService} from "../../../service/category.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {UpdateCategoryComponent} from "../update-category/update-category.component";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  checkUserLogin = false;
  listCategory: Category[] = [];
  displayedColumns: string[] = ['id','name', 'avatar','edit'];

  dataSource: any;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  constructor(public dialog: MatDialog,
              private tokenService: TokenService,
              private categoryService: CategoryService) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateCategoryComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.categoryService.getListCategory().subscribe(data => {
          this.listCategory = data;
          console.log('listCTG result --------- -->', this.listCategory)
          this.dataSource = new MatTableDataSource<Category>(this.listCategory);
          this.dataSource.paginator = this.paginator;
        });
      }
    });
  }
  // categoryId: any;

  openDialogUpdate(id: any) {
    console.log('id dialog --->', id)
    // this.categoryId = id;
    const dialogRef = this.dialog.open(UpdateCategoryComponent, {
      data: {
        dataKey: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.categoryService.getListCategory().subscribe(data => {
          this.listCategory = data;
          console.log('listCTG result --------- -->', this.listCategory)
          this.dataSource = new MatTableDataSource<Category>(this.listCategory);
          this.dataSource.paginator = this.paginator;
        });
      }
    });
  }
  ngOnInit(): void {
    console.log('GOI ON INIT')
      this.categoryService.getListCategory().subscribe(data => {
        this.listCategory = data;
        this.dataSource = new MatTableDataSource<Category>(this.listCategory);
        this.dataSource.paginator = this.paginator;
      });
    if (this.tokenService.getToken()) {
      this.checkUserLogin = true;
    }
  }



}
