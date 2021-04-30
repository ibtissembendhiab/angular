import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/core/services/admin.service';
import { UserService } from 'src/app/core/services/user.service';
import { group } from 'src/app/shared/group.model';

@Component({
  selector: 'app-hr-departments',
  templateUrl: './hr-departments.component.html',
  styleUrls: ['./hr-departments.component.scss']
})
export class HrDepartmentsComponent implements OnInit {
  dplistTab: boolean = true;
  dpgridTab: boolean;
  groupform:FormGroup;
  submittedgroup=false;
  listgroup:group[]=[];
  lg:any;

  constructor(private modalService: BsModalService,private formBuilder: FormBuilder ,
    private router:Router, private route:ActivatedRoute,private toastr: ToastrService, 
    private adminService: AdminService,
    private userservice: UserService) { }
  modalRef: BsModalRef;

  ngOnInit(): void {
    this.checkgroupname();

     this.adminService.getallgroups().subscribe(Response => {
     console.log(Response)
       this.listgroup=Response;
     this.listgroup=this.lg.list; 
      console.log(this.lg);
    });
  }

  checkgroupname(){
    this.groupform = this.formBuilder.group({
      groupName: ['', Validators.required],
      description: ['',Validators.required]
    })
     
  }

  onSubmitcreatefolder()
  {
    this.submittedgroup = true;
  
    if (this.groupform.invalid) {
       // return this.toastr.error("error");
    }
    this.userservice.CreateGroup(this.groupform.value).subscribe();
    // this.toastr.success("Group added successfully");
     location.reload();
  }
    
    onResetforgroup() {
    this.submittedgroup = false;
    this.groupform.reset();
  }

  get fgroup() { return this.groupform.controls; }
  

  onTab(number) {
    this.dplistTab = false;
    this.dpgridTab = false;
    if (number == '1') {
      this.dplistTab = true;
    }
    else if (number == '2') {
      this.dpgridTab = true;
    }
  }
 //displaygroups(){
  //this.adminService.getallgroups().subscribe((res)=>{this.listgroup = res ;})
 //}

  AddModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-md' })
    );
  }

}
