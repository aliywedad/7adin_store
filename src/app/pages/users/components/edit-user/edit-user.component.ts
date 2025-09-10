import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {   OnInit } from '@angular/core';
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
  selector: 'app-edit-user',
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
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {
  constructor(
    private service: UsersServicesComponent,
    @Inject(MAT_DIALOG_DATA) public data: any, // Injecting passed data
    private dialogRef: MatDialogRef<EditUserComponent>
  ) {}


  roles = [{ value: 'Admin', viewValue: 'Admin' }, { value: 'User', viewValue: 'User' }]
  statuses = [{ value: 'Confirmed', viewValue: 'Confirmed' }, { value: 'Pending', viewValue: 'Pending' }]
  user: any =this.data;
showInputsdata(){
  console.log(this.user);
}

Onsubmit() {
  console.log(this.user);
  this.service.editProduct(this.user).subscribe((data: any) => {
    console.log(data);
    this.onClose();
  });
 }
 onClose() {
  this.dialogRef.close();
}

}
