import { Component, OnInit } from '@angular/core';
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
import { MatDialogRef } from '@angular/material/dialog';
import { ProductsComponent } from '../../products.component';
@Component({
  selector: 'app-add-product',
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
    templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit {
constructor(private service: ProductsService,private categoryService: CategoryService,
      public dialogRef: MatDialogRef<ProductsComponent>,
  
) { }
categories: any[] = [];

  ngOnInit() {
    this.categoryService.getCategoryData().subscribe((data: any[]) => {
      this.categories = data;
    })
    }
  
    img1: string = '';
    img2: string = '';
    product: any = {
    name: '',
    price: 0,
    stockQuantity: 0,
    description: '',
    idCategory:0,
    principalPhoto:"",
    supplementaryPhotos:[]
  };
 Onsubmit() {
  this.product.supplementaryPhotos.push(this.img1);
  this.product.supplementaryPhotos.push(this.img2);
  console.log(this.product);
  this.service.addProduct(this.product).subscribe((data: any) => {
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
      this.img2=e.target.result;
    };
    reader.readAsDataURL(file); // Convert the file to Base64
  }
}



  showInputsdata(){
    console.log(this.product);
  }


}
