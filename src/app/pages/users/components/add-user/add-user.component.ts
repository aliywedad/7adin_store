import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { UsersServicesComponent } from 'src/app/pages/users/UsersServices';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoadingComponent } from 'src/app/tools/loading/loading.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatRadioModule,
    MatButtonModule,
    LoadingComponent,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent implements OnInit {
  constructor(
    private service: UsersServicesComponent,
    private router: Router
  ) {}

  ngOnInit() {}
  isLoading = false;

  roles = [
    { value: 'Admin', viewValue: 'Admin' },
    { value: 'User', viewValue: 'User' },
  ];
  statuses = [
    { value: 'Confirmed', viewValue: 'Confirmed' },
    { value: 'Pending', viewValue: 'Pending' },
  ];
  user: any = {
    name: '',
    phone: null,
    email: '',
    password: '1234',
    token: '',
    created_at: new Date(),
    roles: [],
  };

  updateRoles(role: string) {
    const index = this.user.roles.indexOf(role);

    if (index > -1) {
      // Role exists → remove it
      this.user.roles.splice(index, 1);
    } else {
      // Role does not exist → add it
      this.user.roles.push(role);
    }

    console.log('Updated roles:', this.user.roles);
  }
  goBack() {
    this.router.navigate(['/admin/users']);
  }

  onSubmit() {
    this.isLoading = true;
    console.log(this.user);
    this.service.addUser(this.user).subscribe({
      next: async (res) => {
        this.isLoading = false;

        Swal.fire({
          position: 'center',
          icon: 'success',
          text: res.message,
          showConfirmButton: false,
          timer: 1500,
        });
      },
      error: (err) => {
        console.log(err);
        Swal.fire({
          title: 'error!',
          text: err.error.message,
          icon: 'error',
        });
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  showInputsdata() {
    console.log(this.user);
  }
}
