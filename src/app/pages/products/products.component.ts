import { CommonModule } from '@angular/common';
import { Component,inject,OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ProductsService } from 'src/app/services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    AddProductComponent
    ,    RouterModule,
    
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService ,
    private router: Router,
     private dialog: MatDialog) { }
  products :any= [
  {
    "idProduct": 1,
    "name": "حاسوب محمول",
    "description": "حاسوب محمول  ",
    "price": 45000,
    "nameCategory": "إلكترونيات",
    "stockQuantity": 10,
    "created_at": "2025-01-05T10:30:00",
    "updated_at": "2025-02-10T14:20:00"
  },
  {
    "idProduct": 2,
    "name": "هاتف ذكي",
    "description": "هاتف بشاش MP",
    "price": 28000,
    "nameCategory": "هواتف",
    "stockQuantity": 25,
    "created_at": "2025-02-01T11:00:00",
    "updated_at": "2025-02-15T09:10:00"
  },
  {
    "idProduct": 3,
    "name": "سماعات ",
    "description": "سماعات  عالية",
    "price": 3500,
    "nameCategory": "إكسسوارات",
    "stockQuantity": 50,
    "created_at": "2025-01-20T08:45:00",
    "updated_at": "2025-02-12T16:00:00"
  },
  {
    "idProduct": 4,
    "name": "طابعة ليزر",
    "description": "طابعة سريعة مع دعم الشبكة اللاسلكية",
    "price": 12000,
    "nameCategory": "مكتبية",
    "stockQuantity": 5,
    "created_at": "2025-02-05T13:15:00",
    "updated_at": "2025-02-18T11:25:00"
  }
]
;

  fetchData() {
    this.productsService.getProductData().subscribe((data) => {this.products = data;});
    console.log(this.products);
  }
  ngOnInit(): void {
 this.fetchData();
  }
  OpenAddProductDilog(){
    const dialogRef = this.dialog.open(AddProductComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.fetchData();
  
    })
  }


  OpenEditProductDilog(data: any){
    const dialogRef = this.dialog.open(EditProductComponent,{data:data});
    dialogRef.afterClosed().subscribe(result => {
      this.fetchData();
  
    })
  }
  deleteProduct(id: number): void {
    this.productsService.deleteProduct(id).subscribe(() => {
      
      this.fetchData();  });
  }

  categories: any = [
    { value: 'steak-0', viewValue: 'categorie1' },
  
  ];
  selectedcategories = this.categories[0].value;


navigate(){
  this.router.navigate(['admin/products-cardview/']);
 }
  trackByName(index: number, product: any): string {
    return product.name;   
  }
  trackById(index: number, product: any): number {
    return product.id_product;
  }

}
