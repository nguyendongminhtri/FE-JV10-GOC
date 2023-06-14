import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {
  constructor(public dialog: MatDialog) {
  }
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}
