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
import { AddOrderComponent } from './components/add-order/add-order.component';
import { Edit } from 'angular-feather/icons';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
@Component({
  selector: 'app-orders',
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
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent  implements OnInit {
  orders : any[] = [];
  constructor(private ordersService: OrdersService,
        private dialog: MatDialog
    
  ) { }

  fetchData() {
    this.ordersService.getOrdersData().subscribe((data) => {this.orders = data;});

  }
  ngOnInit(): void {
    this.fetchData();
     
  }

   OpenAddDilog() {
    const dialogRef = this.dialog.open(AddOrderComponent);
   }

  OpenEditDilog(data: any[]) {

    const dialogRef = this.dialog.open(EditOrderComponent, {
      // width: '300px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
      this.fetchData();

    });
  }

deleteOrder(id: number): void {
  this.ordersService.deleteOrder(id).subscribe(() => {
    this.orders = this.orders.filter((order: any) => order.id_order !== id);
  });
  this.ordersService.getOrdersData().subscribe((data) => {this.orders = data;});

}
  // TrackBy function for better rendering performance
  trackById(index: number, order: any): number {
    return order.id_order;
  }
}
