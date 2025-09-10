import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { UsersServicesComponent } from 'src/app/services/UsersServices';
import { usersData } from './type';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';


const PRODUCT_DATA: any = [
 
  {
    id: 4,
    name: 'mohamed aliy ahmed',
    email: 'mohamedaliy@gmail.com',
    role: "admin",
    status: 'confirmed',
    created_at:'2023-04-05',
    updated_at:'2023-04-05',
  },
 
];



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    AddUserComponent
  ],  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent  implements OnInit{
  constructor(private myService: UsersServicesComponent,private dialog: MatDialog) {}
  users: any = [];
  ngOnInit(): void {

    this.myService.getUserData().subscribe((data) => {
      console.log(data);
      this.users = data;  
    });
  
  }

showAddUserDialog() {
    const dialogRef = this.dialog.open(AddUserComponent);
  
    dialogRef.afterClosed().subscribe((result) => {
    
    });
  }
  showEditUserDialog(user: any) {
    const dialogRef = this.dialog.open(EditUserComponent,{data: user });
  
  }

  deleteUser(id: number) {
    this.myService.deteleClient(id).subscribe(() => {
      this.users = this.users.filter((user: any) => user.id !== id);
    });
  }


  // users = PRODUCT_DATA;
  trackByName(index: number, user: any): string {
    return user.name; // Use a unique identifier like `user.id` or `user.name`
  }
}
