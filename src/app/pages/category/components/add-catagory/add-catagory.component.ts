import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-add-catagory',
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
  templateUrl: './add-catagory.component.html',
  styleUrl: './add-catagory.component.scss'
})
export class AddCatagoryComponent {
  constructor(private categoryService: CategoryService) { }
  category: any = {
    name: '',
    description: '',
    
  };

onSubmit() {
  this.categoryService.addCategory(this.category).subscribe(
    (response) => {
      console.log('Category added successfully', response);
    },
    (error) => {
      console.error('Error adding category', error);
    }
  );
}
 
  showInputsdata(){
    console.log(this.category);
  }

}
