import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from 'src/app/services/auth.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { share } from 'rxjs';

@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent implements OnInit {


  ngOnInit(): void {
    this.SharedData.clearData()
  }
 
  form: FormGroup;
  error: string="";

  constructor(private service : AuthService,private SharedData: SharedDataService,
    private router: Router
  ) {

    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required]),
      isAdmin: new FormControl(false),
    });
  }

  onSubmit() {
    if (this.form.valid) {
       console.log('Form Data:', this.form.value.isAdmin);
      //  this.service.authenticate(this.form.value).subscribe({
      //   next: (res) => {
      //     console.log('Success:', res);
      //     this.SharedData.setData('admin',res);

      //     this.router.navigate(['/A']); 
      //   },
      //   error: (err) => {
      //     console.error('Error:', err);
      //     // Handle error (e.g., show error message to the user)
      //     if (err.status === 401) {
      //       alert('Invalid credentials. Please try again.');
      //     } else if (err.status === 500) {
      //       alert('Server error. Please try again later.');
      //     } else {
      //       alert('Something went wrong. Please try again.');
      //     }
      //   },
      //   complete: () => {
      //     console.log('Request completed!');
      //   },
      // });
      
      
      this.router.navigate(['/admin']);
      
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
