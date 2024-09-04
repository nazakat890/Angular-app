import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  creatForm: FormGroup;

  constructor(private userservice: UserService, private router: Router) {}
  ngOnInit(): void {
    this.creatForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {
    let user = this.creatForm.value;
    this.userservice.addUser(user).subscribe(
      (res: any) => {
        console.log(res)
        if (res.success === true) {
          Swal.fire('Done', 'User Created Successfully', 'success');
          this.router.navigate(['login']);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
