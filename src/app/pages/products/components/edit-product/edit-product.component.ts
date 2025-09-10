
 

 



import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ProductsService } from 'src/app/services/products.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsComponent } from '../../products.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-product',
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
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent implements OnInit {
constructor(private service: ProductsService,
  private categoryService: CategoryService,
  public dialogRef: MatDialogRef<ProductsComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
) { }
categories: any[] = [];
product: any = {
 
};
  ngOnInit() {
    this.categoryService.getCategoryData().subscribe((data: any[]) => {
      this.categories = data;
    })

    this.product = this.data
    this.img1  = this.product.supplementaryPhotos[0];
    this.img2 =this.product.supplementaryPhotos[1];
    }
    
  
    img1: string = '';
    img2: string = '';
  
 Onsubmit() {
  // if (this.img1 != '') {
  //   // Modify the element at index 0 (first element)
  //   this.product.supplementaryPhotos[0] = this.img1;
  // }
  
  // if (this.img2 != '') {
  //   // Modify the element at index 1 (second element)
  //   this.product.supplementaryPhotos[1] = this.img2;
  // }

  console.log(this.product);
  this.service.EditProduct(this.product).subscribe((data: any) => {
    console.log(data);
    this.dialogRef.close();
  });
 }


 
 
 base64Image: string = '';

 onFileSelected(event: any) {
   const file = event.target.files[0];
   if (file) {
     const reader = new FileReader();
     reader.onload = (e: any) => {
       this.product.principalPhoto = e.target.result; // Set the Base64 string
     };
     reader.readAsDataURL(file); // Convert the file to Base64
   }
 }
 onFileSelectedsecond(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      // this.img1=e.target.result;
      this.product.supplementaryPhotos[0]=e.target.result
      this.img1=e.target.result;
    };
    reader.readAsDataURL(file); // Convert the file to Base64
  }
}

onFileSelectedthird(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.product.supplementaryPhotos[1]=e.target.result
      this.img2=e.target.result;
    };
    reader.readAsDataURL(file); // Convert the file to Base64
  }
}



  showInputsdata(){
    console.log(this.product);
  }


}

