import { UserModel } from './../../../../shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';0
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { SignupService } from 'src/app/core/services/signup.service';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-hr-users',
  templateUrl: './hr-users.component.html',
  styleUrls: ['./hr-users.component.scss']
})

export class HrUsersComponent implements OnInit {

 // @Input()
 li:any;
 lis=[];

  loading = false;
  submitted = false;
  contactTab: boolean;
  chatTab: boolean = true;
  modalRef: BsModalRef;
  data = false; 
  UserForm: any;
  massage: string;
     

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
  });
  public collection:any= [];
    
  constructor(
    public service: SignupService,
     public toastr: ToastrService, 
     private route: ActivatedRoute,
     private formBuilder: FormBuilder,
     private router: Router,
     private modalService: BsModalService,
     private http: HttpClient,
     private Service: UserService
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

     this.Service.getAll().subscribe(Response => {
      console.log(Response)
      // If response comes hideloader() function is called
      // to hide that loader 
      // if(Response){  
      //   hideloader();
      // } 
      this.li=Response;
      this.lis=this.li.list; 
      console.log(this.li);
    });
    function hideloader(){
      document.getElementById('loading').style.display = 'block';}
  }
    
   
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  get f() {return this.registerForm.controls;}

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

  //Delete User 
  /*public deleteUser(user) 
  {
    this.collection.splice(user.id,1)
    this.Service.deleteUser(user).subscribe(UserList=>{
    console.log("user Deleted",FileList),
    this.toastr.success('File Deleted')
    })

  }*/

}
