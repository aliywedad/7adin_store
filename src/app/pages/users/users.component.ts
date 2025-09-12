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
import { Constants } from 'src/app/tools/Constants';


const PRODUCT_DATA: any = 
[
    {
    "id": 1,
    "name": "محمد أحمد",
    "email": "mohamed.ahmed@example.com",
    "roles": ["admin", "مدير المنتجات"]
  },
  {
    "id": 2,
    "name": "فاطمة الزهراء",
    "email": "fatima.zahra@example.com",
    "roles": ["مدير المبيعات", "مدير المنتجات"]
  },
  {
    "id": 3,
    "name": "علي الحسن",
    "email": "ali.hassan@example.com",
    "roles": ["المحاسب"]
  },
  {
    "id": 4,
    "name": "خديجة محمد",
    "email": "khadija.mohamed@example.com",
    "roles": ["الموارد البشرية"]
  },
  {
    "id": 5,
    "name": "يوسف إبراهيم",
    "email": "youssef.ibrahim@example.com",
    "roles": ["الدعم الفني", "مدير المنتجات"]
  }
  ,
  {
    "id": 11,
    "name": "محمد أحمد",
    "email": "mohamed.ahmed@example.com",
    "roles": ["admin", "مدير المنتجات"]
  },
  {
    "id": 21,
    "name": "فاطمة الزهراء",
    "email": "fatima.zahra@example.com",
    "roles": ["مدير المبيعات", "مدير المنتجات"]
  },
  {
    "id": 31,
    "name": "علي الحسن",
    "email": "ali.hassan@example.com",
    "roles": ["المحاسب"]
  },
  {
    "id": 41,
    "name": "خديجة محمد",
    "email": "khadija.mohamed@example.com",
    "roles": ["الموارد البشرية"]
  },
  {
    "id": 51,
    "name": "يوسف إبراهيم",
    "email": "youssef.ibrahim@example.com",
    "roles": ["الدعم الفني", "مدير المنتجات"]
  }
]
;



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
    console.log("user info : ",Constants.admin)

    // this.myService.getUserData().subscribe((data) => {
    //   console.log(data);
      
    // });
  this.users = PRODUCT_DATA;  
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
