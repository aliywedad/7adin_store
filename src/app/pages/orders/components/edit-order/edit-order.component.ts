 




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
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrdersComponent } from '../../orders.component';


@Component({
  selector: 'app-edit-order',
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
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.scss'
})
export class EditOrderComponent implements OnInit {
 

  constructor(private ordersService: OrdersService,
    private userservice:UsersServicesComponent,
      public dialogRef: MatDialogRef<OrdersComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
      ) { }
  clients: any = []
ngOnInit(): void {
    this.userservice.getUserData().subscribe((data:any) => {this.clients = data;});
}
 
  statuses:any[] = [{value:'deliverd',viewValue:'deliverd'},{value:'pending',viewValue:'pending'}]
  order: any =this.data;
onClose() {
  this.dialogRef.close();
}
onSubmit() {
  console.log(this.order);
  this.ordersService.addOrder(this.order).subscribe(
    (response) => {
      console.log('order added successfully', response);
    },
    (error) => {
      console.error('Error adding order', error);
    }
  );
}
 
  showInputsdata(){
    console.log(this.order);
  }

}

