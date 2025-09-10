import { CommonModule } from '@angular/common';
import { Component,inject,OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { PeymentService } from 'src/app/services/peyment.service';
import { FormsModule } from '@angular/forms';  // Import FormsModule for template-driven forms
import { MatDialog } from '@angular/material/dialog';
import { AddPaymentComponent } from './components/add-payment/add-payment.component';
import { EditPaymentComponent } from './components/edit-payment/edit-payment.component';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent implements OnInit {
constructor(private peymentService: PeymentService,private dialog: MatDialog) {}
productName: string = '';  // Store input value

payments : any[] = [
  // { id_payment: 1, payment_method: 'Credit Card', amount: 299.99, status: 'Completed', transaction_date: '2023-11-01' },
  // { id_payment: 2, payment_method: 'PayPal', amount: 99.99, status: 'Pending', transaction_date: '2023-10-15' },
  // { id_payment: 3, payment_method: 'Bank Transfer', amount: 150.50, status: 'Failed', transaction_date: '2023-09-30' },
  // { id_payment: 4, payment_method: 'Debit Card', amount: 75.00, status: 'Completed', transaction_date: '2023-11-10' }
];

 fetchData() {
  this.peymentService.getPaymentData().subscribe((data) => {this.payments = data;});
 }
  ngOnInit(): void {
    this.fetchData();
  }
    getProductName() {
    console.log(this.productName);
  }

  selectedStatus: string;

  statuses = [
    { value: 'Completed', viewValue: 'Completed' },
    { value: 'Pending', viewValue: 'Pending' },
    { value: 'Failed', viewValue: 'Failed' }
  ];

  trackById(index: number, item: any): number {
    return item.id_payment;
  }
  deletePayment(id: number): void {
    this.peymentService.deletePayment(id).subscribe(() => {
      console.log("deleted the id ..... ",id);
      this.fetchData();
    });
  }

  OpenAddDilog() {
    const dialogRef=this.dialog.open(AddPaymentComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
      this.fetchData();

    });
  }


  OpenEditDilog(data: any[]) {

    const dialogRef = this.dialog.open(EditPaymentComponent, {
      // width: '300px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
      this.fetchData();

    });
  }

}
