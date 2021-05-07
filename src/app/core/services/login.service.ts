import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
//import { FormBuilder, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  
  constructor(public http: HttpClient,
    private router: Router) {

      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
      this.user = this.userSubject.asObservable();

     }
  readonly BaseURI = 'https://localhost:44308/api/User';
  
//   formModel = this.f.group({
//     UserName: ['', Validators.required],
//     Email: ['', Validators.email],
//     FullName: [''],
//     Password: ['', [Validators.required, Validators.minLength(4)]],
//       //ConfirmPassword: ['', Validators.required]
//     //}, { validator: this.comparePasswords })
// })
 public get userValue(): User {
        return this.userSubject.value;
    }

login(UserName: string, Password: string) {
  return this.http.post(this.BaseURI + '/login', { UserName, Password })
  .pipe(map(user => {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('user', JSON.stringify(user));
    //this.userSubject.next(user);
    return user;
}));
}


logout(){
  localStorage.removeItem('user')
  this.userSubject.next(null);
  this.router.navigate(['/login'])
}

}