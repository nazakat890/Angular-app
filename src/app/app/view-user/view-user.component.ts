import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})

export class ViewUserComponent implements OnInit {
viewform:FormGroup;
id;
  constructor(private userservice:UserService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.viewform = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
    });

    this.id = this.activatedroute.snapshot.params['id'];
    this.userservice.getOne(this.id).subscribe((data: any) => {
      this.viewform.setValue({
        fullName: data.userdata.fullName,
        email: data.userdata.email,
      });
    });
    
    
  }
  




}
