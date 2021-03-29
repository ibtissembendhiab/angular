import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { SignupService } from 'src/app/core/services/signup.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-hr-users',
  templateUrl: './hr-users.component.html',
  styleUrls: ['./hr-users.component.scss']
})
export class HrUsersComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  contactTab: boolean;
  chatTab: boolean = true;

  constructor(
    public service: SignupService,
     public toastr: ToastrService, 
     private route: ActivatedRoute,
     private formBuilder: FormBuilder,
     private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group
    ({
      UserName: ['', Validators.required],
      Email:    ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get f() { return this.registerForm.controls;}


  //registration 
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

 onTab(number) {
    this.chatTab = false;
    this.contactTab = false;
    if (number == '1') {
      this.chatTab = true;
    }
    else if (number == '2') {
      this.contactTab = true;
    }
  }

  sweettalert7() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this user !',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonColor: "rgb(220, 53, 69)",
      confirmButtonText: 'Yes, delete it!',

    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'The user has been deleted.',
          'success'
        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your user is safe :)',
          'error'
        )
      }
    })
  }

}
