


import { Component, OnInit } from '@angular/core';
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


@Component({
  selector: 'app-add-order',
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
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.scss'
})
export class AddOrderComponent implements OnInit {
 

  constructor(private ordersService: OrdersService,private userservice:UsersServicesComponent) { }
  clients: any = []
ngOnInit(): void {
    this.userservice.getUserData().subscribe((data:any) => {this.clients = data;});
}
 
  statuses:any[] = [{value:'deliverd',viewValue:'deliverd'},{value:'pending',viewValue:'pending'}]
  order: any =     {
    "status": "deliverd",
    "description": "",
    "totalPrice": 0,
    "idUser":1
};

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

