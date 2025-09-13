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
import { ActivatedRoute } from '@angular/router';
import { LoadingComponent } from 'src/app/tools/loading/loading.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    LoadingComponent,
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss',
})
export class EditUserComponent implements OnInit {
  constructor(
    private service: UsersServicesComponent,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  user: any = {};
  isLoading = false;

  ngOnInit() {
    this.isLoading = true;

    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.service.getUserById(Number(userId)).subscribe({
        next: async (res) => {
          console.log(res);
          this.user = res;
          this.user.password = '';
          this.isLoading = false;
        },
        error: (err) => {
          console.log(err);
          Swal.fire({
            title: '  خطأ',
            text: err.error.message || 'حدث خطأ أثناء جلب بيانات المستخدم',
            icon: 'error',
            confirmButtonText: 'حسناً',
          });
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }

  checkedRole(role: string) {
    const index = this.user.roles.indexOf(role);
    return index > -1;
  }

  updateRoles(role: string) {
    const index = this.user.roles.indexOf(role);
    if (index > -1) {
      this.user.roles.splice(index, 1);
    } else {
      this.user.roles.push(role);
    }
    console.log('الأدوار بعد التحديث:', this.user.roles);
  }

  goBack() {
    this.router.navigate(['/admin/users']);
  }

  onSubmit() {
    this.isLoading = true;

    console.log(this.user);
    this.service.editUser(this.user).subscribe({
      next: async (res) => {
        this.isLoading = false;
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: res.message || 'تم تحديث بيانات المستخدم بنجاح',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      error: (err) => {
        console.log(err);
        Swal.fire({
          title: '  خطأ',
          text: err.error.message || 'فشل في تحديث بيانات المستخدم',
          icon: 'error',
          confirmButtonText: 'موافق',
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
