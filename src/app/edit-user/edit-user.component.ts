import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  id;
  user: any = {};
  constructor(
    private activatedroute: ActivatedRoute,
    private userservice: UserService,
  ) {}
  editForm: FormGroup;
  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.userservice.getOne(this.id).subscribe((data: any) => {
      this.editForm.setValue({
        fullName: data.userdata.fullName,
        email: data.userdata.email,
      });
    });
    this.editForm = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {
    let user = this.editForm.value;
    this.userservice.editUser(this.id, user);
  }
}
