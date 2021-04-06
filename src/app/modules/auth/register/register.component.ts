import { SignupService } from '../../../../app/core/services/signup.service';
import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({ 
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: false } }
  ]
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(public service: SignupService,
     public toastr: ToastrService, 
     private route: ActivatedRoute,
     private formBuilder: FormBuilder,
     private router: Router ) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      Email:    ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]]

  });
    //this.service.formModel.reset();
  }

  get f() { return this.registerForm.controls;}

    onSubmit() {
        this.submitted = true;  

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.service.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error => {
                    this.loading = false;
                });
    }
 
}
