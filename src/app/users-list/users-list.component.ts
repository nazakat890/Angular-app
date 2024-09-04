import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users;
  
  constructor(private userservice: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(
      (res: any) => {
      // console.log(res);
        this.users = res.allusers;
      },
      (err) => {
        Swal.fire('Server Down');
      }
    );
  }

  onDelete(id) {
    this.userservice.deleteUser(id).subscribe((res) => {
      
      this.userservice.getUsers().subscribe((res: any) => {
        this.users =res.allusers;
      });
    });
  }

  onEdit(id) {
    this.router.navigate(['/dashboard/edit/user/' + id]);
  }
  onView(id) {
    this.router.navigate(['/dashboard/view/' + id]);
  }


}
