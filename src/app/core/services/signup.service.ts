import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { FormBuilder, Validators } from '@angular/forms';
import { Register } from 'src/app/shared/models/register.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
 
  constructor(public http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44308/api/User';

 
  //formModel = this.fb.group({
    //FirstName: [Validators.required],
    //LastName: [Validators.required],
    //UserName: [Validators.required],
    //Email:    [Validators.email],
    //Password: [[Validators.required, Validators.minLength(4)]],
    //Role: [Validators.required]
  //})
  CreateUser(register:Register)  
  {  
   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
   return this.http.post<Register[]>(this.BaseURI + '/Register/', register, httpOptions)  
  }  
  
 // register(register: Register ) {
   // return this.http.post(this.BaseURI +'/Register',register);
//}
}
