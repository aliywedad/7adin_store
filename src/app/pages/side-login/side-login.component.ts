import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { MatButtonModule } from '@angular/material/button';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { share } from 'rxjs';
import { AuthService } from './auth.service';
import { Constants } from 'src/app/tools/Constants';
import { Service } from 'src/app/tools/Service';
import Swal from 'sweetalert2';
import { LoadingComponent } from 'src/app/tools/loading/loading.component';

@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [
    RouterModule,
    LoadingComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './side-login.component.html',
  styleUrl: './side-login.component.scss',
})
export class AppSideLoginComponent implements OnInit {
  ngOnInit(): void {
    this.SharedData.clearData();
  }
  isLoading = false;
  form: FormGroup;
  error: string = '';

  constructor(
    private service: AuthService,
    private SharedData: SharedDataService,
    private router: Router
  ) {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value.isAdmin);
      this.isLoading = true;
      this.service.authenticate(this.form.value).subscribe({
        next: async (res) => {
          console.log('Success:', res);
          // this.SharedData.setData('admin',res);

          Constants.admin = res.user;
          console.log('admin is :', (Constants.admin = res.user));
          await Service.setUserId(res.user.id);
          this.isLoading = false;

          this.router.navigate(['/admin/']);
        },
        error: (err) => {
          Swal.fire({
            title: '  خطأ',
            text: err.error.message || 'فشل في تحديث بيانات المستخدم',
            icon: 'error',
            confirmButtonText: 'موافق',
          });
          console.error('Elorror:', err);
          this.isLoading = false;
        },
        complete: () => {
          console.log('Request completed!');
          this.isLoading = false;
        },
      });

      // this.router.navigate(['/admin']);

      //  console.log('Form Data:', this.form.value.isAdmin);

      console.log('Form Data:', this.form.value.isAdmin);
    } else {
      console.log('Form is invalid!');
    }
  }

  get f() {
    return this.form.controls;
  }

  // onSubmit() {
  //   // console.log(this.form.value);
  //   // this.router.navigate(['/']);
  //   console.log(this.form.value);
  // }
}
