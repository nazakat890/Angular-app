import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
  })

export class AuthGuard implements CanActivate{

constructor(private authservice: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
                   if(this.authservice.isAuthenticated()){
                       return true;
                   } else{
                        this.router.navigate(['/']);
                   }
                }
}