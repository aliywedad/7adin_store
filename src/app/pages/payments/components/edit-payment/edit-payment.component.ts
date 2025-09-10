 





 


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
import { PeymentService } from 'src/app/services/peyment.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PaymentsComponent } from '../../payments.component';


@Component({
  selector: 'app-edit-payment',
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
  templateUrl: './edit-payment.component.html',
  styleUrl: './edit-payment.component.scss'
})
export class EditPaymentComponent   implements OnInit {
 

  constructor(
    private ordersService: OrdersService,
    private paymentService:PeymentService,
    public dialogRef: MatDialogRef<PaymentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  orders:any[] = []
  
  ngOnInit(): void {
    this.ordersService.getOrdersData().subscribe((data:any) => {this.orders = data;});
}
statuses:any[] = [{value:'deliverd',viewValue:'deliverd'},{value:'pending',viewValue:'pending'}]

 
  payment: any =this.data
//    {
//     "idPayment": 1,
//     "payment": "sedad",
//     "amount": 1.33,
//     "status": "deliverd",
//     "transactionDate": "2025-01-13T09:17:17.005011",
//     "orderId": 4
// };

onSubmit() {
  console.log(this.payment);
  this.paymentService.editPayment(this.payment).subscribe(
    (response) => {
      console.log('order added successfully', response);
    },
    (error) => {
      console.error('Error adding order', error);
    }
  );
}
 
  

}

