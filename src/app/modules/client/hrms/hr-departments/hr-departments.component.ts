import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/core/services/user.service';

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


  constructor(private modalService: BsModalService,private formBuilder: FormBuilder ,
    private router:Router, private route:ActivatedRoute, private userservice: UserService) { }
  modalRef: BsModalRef;

  ngOnInit(): void {
    this.checkgroupname();
  }

  checkgroupname(){
    this.groupform = this.formBuilder.group({
      groupName: ['', Validators.required],
      groupDesc: ['',Validators.required]
    })
     
  }

  onSubmitcreatefolder()
  {
    this.submittedgroup = true;
  
    if (this.groupform.invalid) {
        return;
    }
  
    this.userservice.CreateGroup(this.groupform.value).subscribe( );
   
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

  AddModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-md' })
    );
  }

}
