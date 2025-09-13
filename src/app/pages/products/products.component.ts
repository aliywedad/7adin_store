import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ProductsServicesComponent } from 'src/app/pages/products/productsServices';
import { Constants } from 'src/app/tools/Constants';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoadingComponent } from 'src/app/tools/loading/loading.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatTableModule,
    LoadingComponent,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  constructor(
    private myService: ProductsServicesComponent,
    private router: Router
  ) {}
  isLoading = false;
  products: any = [];
  ngOnInit(): void {
    this.isLoading = true;
    console.log('product info : ', Constants.admin);

    this.myService.getProductsData().subscribe((data) => {
      console.log('data is ', data);

      // Ensure products is an array
      if (Array.isArray(data)) {
        this.products = data;
      } else if (data && typeof data === 'object') {
        this.products = Object.values(data); // Convert object to array
      } else {
        this.products = [];
      }
      this.isLoading = false;
    });
  }
  goToAddPage() {
    this.router.navigate(['admin/add-products']);
  }
  goToEditPage(id: number) {
    this.router.navigate(['/admin/edit-products', id]);
  }

  deleteProduct(id: number) {
Swal.fire({
  title: 'هل أنت متأكد؟',
  text: "لن تتمكن من التراجع عن هذا!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'نعم، احذف المنتج!',
  cancelButtonText: 'إلغاء'
}).then((result) => {
  if (result.isConfirmed) {
    this.myService.deteleProduct(id).subscribe(() => {
      this.products = this.products.filter((product: any) => product.id !== id);
      Swal.fire({
        text: 'تم حذف المنتج بنجاح.',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      });
    });
  }
});

  }

  // products = PRODUCT_DATA;
  trackById(index: number, product: any): string {
    return product.id; // Use a unique identifier like `product.id` or `product.name`
  }
}
