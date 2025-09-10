import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CategoryService } from 'src/app/services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCatagoryComponent } from './components/add-catagory/add-catagory.component';
import { EditCatagoryComponent } from './components/edit-catagory/edit-catagory.component';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    AddCatagoryComponent
    
  ],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private dialog: MatDialog
  ) {}

  categories: any[] = [];

  OpenAddCategoryDilog() {
    const dialogRef = this.dialog.open(AddCatagoryComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.fetchData();

    })
  }

  OpenEditCategoryDilog(data: any[]) {
    const dialogRef = this.dialog.open(EditCatagoryComponent,{data: data});
    dialogRef.afterClosed().subscribe(result => {
      this.fetchData();

    })
  }

  fetchData() {
    this.categoryService.getCategoryData().subscribe((data: any[]) => {
      this.categories = data;
    });
  }
  ngOnInit(): void {
  this.fetchData();
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.fetchData();

    });


    
  }
  trackById(index: number, item: any): number {
    return item.id_category; // Optimisation de l'affichage en suivant un identifiant unique
  }
}
