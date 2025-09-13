import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ProductsServicesComponent } from 'src/app/pages/products/productsServices';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoadingComponent } from 'src/app/tools/loading/loading.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatRadioModule,
    MatButtonModule,
    LoadingComponent,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent implements OnInit {
  constructor(
    private service: ProductsServicesComponent,
    private router: Router
  ) {}

  ngOnInit() {}
  isLoading = false;

  roles = [
    { value: 'Admin', viewValue: 'Admin' },
    { value: 'Product', viewValue: 'Product' },
  ];
  statuses = [
    { value: 'Confirmed', viewValue: 'Confirmed' },
    { value: 'Pending', viewValue: 'Pending' },
  ];
  product: any = {
    name: '',
    description: '',
    purchase_price: 0,
    sale_price: 0,
    stock_quantity: 0,
    created_at: new Date(),
    supplier: null,
  };

  updateRoles(role: string) {
    const index = this.product.roles.indexOf(role);

    if (index > -1) {
      // Role exists → remove it
      this.product.roles.splice(index, 1);
    } else {
      // Role does not exist → add it
      this.product.roles.push(role);
    }

    console.log('Updated roles:', this.product.roles);
  }
  goBack() {
    this.router.navigate(['/admin/products']);
  }

  onSubmit() {
    this.isLoading = true;
    console.log(this.product);
    this.service.addProduct(this.product).subscribe({
      next: async (res) => {
this.isLoading = false;
Swal.fire({
  
  position: 'center',
  icon: 'success',
  text: 'تمت إضافة المنتج بنجاح',
  showConfirmButton: false,
  timer: 1500,
});

      },
      error: (err) => {
        console.log(err);
        Swal.fire({
          title: 'error!',
          text: err.error.message,
          icon: 'error',
        });
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  showInputsdata() {
    console.log(this.product);
  }
}
