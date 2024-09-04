import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private userservice: UserService,
    private router: Router,
    private authservice: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      password: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {
    let user = this.loginForm.value;
    this.userservice.loginUser(user).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token',res.token);
        Swal.fire('ok', 'Logged In Successfully', 'success');
        this.router.navigate(['/dashboard/']);
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'error',
          text: 'wrong email or password',
        });
      }
    );
  }
}
