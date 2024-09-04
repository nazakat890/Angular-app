import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authservice: AuthService,
    private router: Router){}
  title = 'user-database';
  
  logout(){
    localStorage.removeItem('token');
   
  
  }
}
  // logout(){
  //   // this.authservice.logOut();
  //   localStorage.removeItem('token');
  //   // this.authservice.logOut()
  
  // }