import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { UsersServicesComponent } from 'src/app/services/UsersServices';
@Component({
  selector: 'app-add-user',
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
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent implements OnInit {
constructor(private service: UsersServicesComponent) { }
 
  ngOnInit() {

    }
  
    roles = [{ value: 'Admin', viewValue: 'Admin' }, { value: 'User', viewValue: 'User' }]
    statuses = [{ value: 'Confirmed', viewValue: 'Confirmed' }, { value: 'Pending', viewValue: 'Pending' }]
    user: any = {
    name: '',
    email: "",
    password: "",
    status: "",
    role: "",
   
  };


  onSubmit() {
    console.log(this.user);
    this.service.addClient(this.user).subscribe((data: any) => {
      console.log(data);
    });
  }

 
  showInputsdata(){
    console.log(this.user);
  }


}
