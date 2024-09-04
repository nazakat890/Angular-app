import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor( private http: HttpClient, private router: Router) {}
  addUser(user) {
    return this.http.post(
      'http://192.168.1.7:3000/v1/user/createUser',
      user
    );
  }

  getOne(id){
    return this.http.get('http://192.168.1.7:3000/api/users/getUser/'+id)
  }

  loginUser(credentials){
    return this.http.post('http://192.168.1.7:3000/v1/user/login',credentials);
  }

  getUsers(){
    return this.http.get("http://192.168.1.7:3000/api/users/allUsers")
  }

  deleteUser(id){
    return this.http.delete('http://192.168.1.7:3000/api/users/deleteUser/' + id)
  }
  editUser(id,user){
    this.http.put('http://192.168.1.7:3000/api/users/updateUser/'+id,user).subscribe(res=>{
      this.router.navigate(['dashboard/users'])
    })
  }
}

