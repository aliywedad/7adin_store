 










import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { CategoryService } from 'src/app/services/category.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryComponent } from '../../category.component';


@Component({
  selector: 'app-edit-catagory',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './edit-catagory.component.html',
  styleUrl: './edit-catagory.component.scss'
})
export class EditCatagoryComponent {
  constructor(
    private categoryService: CategoryService,
    public dialogRef: MatDialogRef<CategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  category: any =this.data;

onSubmit() {
  this.categoryService.EditCategory(this.category).subscribe(
    (response) => {
      console.log('Category added successfully', response);
    },
    (error) => {
      console.error('Error adding category', error);
    }
  );
}
 
onClose() {
  this.dialogRef.close();
}
  showInputsdata(){
    console.log(this.category);
  }

}
