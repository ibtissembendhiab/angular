import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Signup } from 'src/app/shared/models/signup.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
 
  constructor(public fb: FormBuilder, public http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44308/api/User';
 
  formModel = this.fb.group({
    FirstName:[Validators.required],
    LastName: [Validators.required],
    UserName: [Validators.required],
    Email:    [Validators.email],
    Password: [[Validators.required, Validators.minLength(4)]],
    Role:     [Validators.required]
  })

  
  register(signup: Signup ) {
    return this.http.post(this.BaseURI +'/Register',signup);
}

 



}
