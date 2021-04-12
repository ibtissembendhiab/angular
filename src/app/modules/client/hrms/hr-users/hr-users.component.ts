import { SignupService } from './../../../../core/services/signup.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';0
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-hr-users',
  templateUrl: './hr-users.component.html',
  styleUrls: ['./hr-users.component.scss']
})

export class HrUsersComponent implements OnInit {

  loading = false;
  submitted = false;
  contactTab: boolean;
  chatTab: boolean = true;
  modalRef: BsModalRef;

  FirstName = new FormControl("",Validators.required);
  LastName = new FormControl("",Validators.required);
  Email = new FormControl("",[Validators.required,Validators.email]);
  UserName = new FormControl("",Validators.required);
  Password = new FormControl("",[Validators.required,Validators.minLength(4)]);
  Role = new FormControl("",Validators.required);
  
  registerForm = new FormGroup ({
    FirstName: new FormControl(),
    LastName: new FormControl(),
    Email: new FormControl(),
    UserName : new FormControl(),
    Password : new FormControl(),
    Role : new FormControl(),

  })
  
  constructor(
    public service: SignupService,
     public toastr: ToastrService, 
     private route: ActivatedRoute,
     private formBuilder: FormBuilder,
     private router: Router,
     private modalService: BsModalService
  ) { }

  ngOnInit(): void
   { 
     this.registerForm = this.formBuilder.group({
       FirstName: this.FirstName,
       LastName: this.LastName,
       Email: this.Email,
       UserName: this.UserName,
       Password: this.Password,
       Role : this.Role,
     })
   }
  
  /* public deleteUser(file) 
   {
     this.collection.splice(file.fileID,1)
     this.service.deleteUser(file).subscribe(FileList=>{
     console.log("File Deleted",FileList)
     })
 
   }*/

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  get f() { return this.registerForm.controls;}

  onSubmit() {
    this.submitted = true;  

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return null;
    }
    this.loading = true;
    this.service.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
            data => { this.toastr.success("User added");
                this.router.navigate(['../hr-users'], { relativeTo: this.route });
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
