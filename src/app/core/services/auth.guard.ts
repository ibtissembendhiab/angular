import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private loginservice: LoginService,
    private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const user = this.loginservice.userValue;
      if (user) {
          // check if route is restricted by role
        //  if (route.data.roles && route.data.roles.indexOf(user.role) === "Employee") {
              // role not authorised so redirect to home page
             // this.router.navigate(['/hr-users']);
             // return false;
          // }
          // authorised so return true
          this.router.navigate(['/hr-users']);
          return true;
      }
    }

}
