 


 

import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { OrdersService } from 'src/app/services/orders.service';
import { UsersServicesComponent } from 'src/app/services/UsersServices';
import { ProductsService } from 'src/app/services/products.service';
import { OrdersItemsService } from 'src/app/services/ordersItem.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrdersItemComponent } from '../../orders-item.component';


@Component({
  selector: 'app-edit-order-item',
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
  templateUrl: './edit-order-item.component.html',
  styleUrl: './edit-order-item.component.scss'
})
export class EditOrderItemComponent implements OnInit {
 

  constructor(
    private ordersService: OrdersService,
    private orderitemservice:OrdersItemsService,
    private productservice: ProductsService,
    public dialogRef: MatDialogRef<OrdersItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }
  orders: any = []
  products: any = [] 
  ngOnInit(): void {
    this.productservice.getProductData().subscribe((data:any) => {this.products = data;});
    this.ordersService.getOrdersData().subscribe((data:any) => {this.orders = data;});
}
 
  orderitem: any =   this.data;

onSubmit() {
  console.log(this.orderitem);
  this.orderitemservice.editOrder(this.orderitem).subscribe(
    (response) => {
      console.log('order added successfully', response);
      this.onClose()
    },
    (error) => {
      console.error('Error adding order', error);
    }
  );
}


onClose() {
  this.dialogRef.close();
  

}}

