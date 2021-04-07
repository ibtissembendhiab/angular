import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { SignupService } from 'src/app/core/services/signup.service';
import { Register } from 'src/app/shared/models/register.model';
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
  modalRef: BsModalRef;
  data = false; 
  UserForm: any;
  massage: string;
     

  constructor(
    public service: SignupService,
     public toastr: ToastrService, 
     private route: ActivatedRoute,
     private formBuilder: FormBuilder,
     private router: Router,
     private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    //this.registerForm = this.formBuilder.group
    //({  UserName: ['', [Validators.required]],
     //   Email:    ['', [Validators.required,Validators.email]],
      //  UserRole: ['', [Validators.required]],
       // Password: ['', [Validators.required, Validators.minLength(6)]],
      //  Role: ['', [Validators.required]]
    //})
    this.registerForm = this.formBuilder.group({
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
      UserName: new FormControl(''),
      Email: new FormControl(''),
      Password: new FormControl(''),
      Role: new FormControl(''),
  });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  onFormSubmit()    
  {    
    const user = this.registerForm.value;    
    this.Createemployee(user); 
    }    
  Createemployee(register:Register)    
  {    
  this.service.CreateUser(register).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.massage = 'Data saved Successfully';    
      this.registerForm.reset();    
    });    
  }   

  get f() { return this.registerForm.controls;}

  /*onSubmit() {
    this.submitted = true;

    // reset alerts on submit
  //  this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    this.service.CreateUser(this.registerForm.value)
        .pipe(first())
        .subscribe(
            data => {
                //this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
               // this.alertService.error(error);
                this.loading = false;
            });
}*/

 /* onSubmit() {
    this.submitted = true;  

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.loading = true;
    this.service.register(this.registerForm.controls[''].value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate(['../login'], { relativeTo: this.route });
            },
            error => {
                this.loading = false;
            });
}*/


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
          'This user has been deleted.',
          'success'
        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'This user is safe :)',
          'error'
        )
      }
    })
  }

  AddModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-md' })
    );
  }


  

}
