

import { LoginService } from '../../../../../src/app/core/services/login.service';
import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: false } }
  ]
})
export class LoginComponent implements OnInit {
 
  returnUrl: string;
  loginForm: FormGroup;
  submitted = false;
  error = '';
  loading = false;


  constructor(private service: LoginService,
     private route: ActivatedRoute,
     private formBuilder: FormBuilder,
     private router: Router) { }

  ngOnInit() {
  //   this.loginForm = this.formBuilder.group({
  //     UserName: ['', Validators.required, Validators.minLength(2)],
  //     Password: ['', Validators.required, Validators.minLength(6)]
  // });
   this.loginForm = this.formBuilder.group({
    UserName: new FormControl(''),
    Password: new FormControl('')
});
  
 //  get return url from route parameters or default to '/login'
     this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/hr-dashboard';
    //if (localStorage.getItem('token') != null)
      //this.router.navigateByUrl('/hr-dashboard');
  }

  // get f() { return this.loginForm.controls; }

  login(UserName: string, Password: string) {

    this.router.navigateByUrl('/hr-dashboard');

  }

  onSubmit(UserName, Password) {
    this.submitted = true;
    console.log(UserName); // this prints out the correct username
    console.log('OnSubmit is executed');
    console.log(this.loginForm.value); 
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return console.log('LoginForm Invalid');
    }
    this.loading = true;
    this.service.login(this.loginForm.controls['UserName'].value, this.loginForm.controls['Password'].value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
}
}
