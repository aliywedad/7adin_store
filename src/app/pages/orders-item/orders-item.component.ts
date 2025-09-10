
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { OrdersService } from 'src/app/services/orders.service';
import { MatDialog } from '@angular/material/dialog';
import { AddOrderItemComponent } from './components/add-order-item/add-order-item.component';
import { EditOrderItemComponent } from './components/edit-order-item/edit-order-item.component';
import { OrdersItemsService } from 'src/app/services/ordersItem.service';
@Component({
  selector: 'app-orders-item',
  standalone: true,
  imports: [

    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './orders-item.component.html',
  styleUrl: './orders-item.component.scss'
})
export class OrdersItemComponent  implements OnInit {
  orders : any[] = [];
  constructor(private ordersService: OrdersItemsService,
        private dialog: MatDialog
    
  ) { }

  fetchData() {
    this.ordersService.getOrdersItemsData().subscribe((data:any) => {this.orders = data;});

  }
  ngOnInit(): void {
    this.fetchData();
     
  }

   OpenAddDilog() {
    const dialogRef = this.dialog.open(AddOrderItemComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
      this.fetchData();

    });
   }

  OpenEditDilog(data: any[]) {

    const dialogRef = this.dialog.open(EditOrderItemComponent, {
      // width: '300px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
      this.fetchData();

    });
  }

deleteOrder(id: number): void {
  this.ordersService.deleteOrderItem(id).subscribe(() => {
    this.fetchData();  });
 
}
  // TrackBy function for better rendering performance
  trackById(index: number, order: any): number {
    return order.id_order;
  }
}
