import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { UsersServicesComponent } from 'src/app/pages/users/UsersServices';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './components/add-user/add-user.component';
import { Constants } from 'src/app/tools/Constants';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoadingComponent } from 'src/app/tools/loading/loading.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    MatTableModule,
    LoadingComponent,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    AddUserComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  constructor(
    private myService: UsersServicesComponent,
    private router: Router
  ) {}
  isLoading=false
  users: any = [];
  ngOnInit(): void {
    this.isLoading=true
    console.log('user info : ', Constants.admin);

    this.myService.getUserData().subscribe((data) => {
      console.log('data is ', data);

      // Ensure users is an array
      if (Array.isArray(data)) {
        this.users = data;
      } else if (data && typeof data === 'object') {
        this.users = Object.values(data); // Convert object to array
      } else {
        this.users = [];
      }
       this.isLoading=false
    });
  }
  goToAddPage() {
    this.router.navigate(['admin/add-users']);
  }
  goToEditPage(id: number) {
    this.router.navigate(['/admin/edit-users', id]);
  }

  deleteUser(id: number) {
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.myService.deteleUser(id).subscribe(() => {
          this.users = this.users.filter((user: any) => user.id !== id);
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          });
        });
      }
    });
  }

  // users = PRODUCT_DATA;
  trackById(index: number, user: any): string {
    return user.id; // Use a unique identifier like `user.id` or `user.name`
  }
}
