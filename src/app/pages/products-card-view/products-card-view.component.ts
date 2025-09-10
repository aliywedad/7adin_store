 






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
import { AddProductComponent } from '../products/components/add-product/add-product.component';
import { EditProductComponent } from '../products/components/edit-product/edit-product.component';
import { Router, RouterModule } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-products-card-view',
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
    TablerIconsModule
    
  ],
  templateUrl: './products-card-view.component.html',
  styleUrl: './products-card-view.component.scss'
})
export class ProductsCardViewComponent implements OnInit {
  // base64Image: any;

  constructor(private productsService: ProductsService ,
    private router: Router,
     private dialog: MatDialog) { }
  // products :any= [];
  prods:any=[];
  fetchData() {
    this.productsService.getProductData().subscribe((data) => {this.prods = data;});
    console.log(this.prods);
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


  categories: any = [
    { value: 'steak-0', viewValue: 'categorie1' },
  
  ];
  selectedcategories = this.categories[0].value;

deleteProduct(id: number): void {
  this.productsService.deleteProduct(id).subscribe(() => {
    
    this.fetchData();  });
}
navigate(){
  this.router.navigate(['admin/products/']);
 }
  trackByName(index: number, product: any): string {
    return product.name;   
  }
  trackById(index: number, product: any): number {
    return product.id_product;
  }

  

 


 

}








