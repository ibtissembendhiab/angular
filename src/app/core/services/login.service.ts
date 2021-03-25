import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { FormBuilder, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor(public http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44308/api/User';
  
//   formModel = this.f.group({
//     UserName: ['', Validators.required],
//     Email: ['', Validators.email],
//     FullName: [''],
//     Password: ['', [Validators.required, Validators.minLength(4)]],
//       //ConfirmPassword: ['', Validators.required]
//     //}, { validator: this.comparePasswords })
// })


login(UserName: string, Password: string) {
  return this.http.post(this.BaseURI + '/login', { UserName, Password })
}
}