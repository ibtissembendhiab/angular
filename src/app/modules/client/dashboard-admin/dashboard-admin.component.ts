import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { AdminService } from 'src/app/core/services/admin.service';
import { ArchiveService } from 'src/app/core/services/archive.service';
import { SignupService } from 'src/app/core/services/signup.service';
import { UploadService } from 'src/app/core/services/upload.service';
import { UserService } from 'src/app/core/services/user.service';
import { group } from 'src/app/shared/models/group.model';
import { ProgressStatus, ProgressStatusEnum } from './progresststatus.model';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {

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

  groupform:FormGroup;
  submittedgroup=false;
  title: any
  @Input() public disabled: boolean;
  @Input() public fileName: string;
  @Output() public downloadStatus: EventEmitter<ProgressStatus>;
  public collection:any= [];
  loading: boolean;
  allfilelist;
  li;
  public lis:any=[];
  submitted = false;
  public coll:any= [];
  allarchivedfilelist;
  public folders:any=[];
  allfolderlist;
  lg;
public listgroup:group[]
  
  constructor(private adminService :AdminService,
     private UploadService : UploadService,   
     public toastr: ToastrService,
     private router: Router,
     private archiveService: ArchiveService,
     private registerService: SignupService,
     private formBuilder: FormBuilder ,
     private modalService: BsModalService) 
     { 
      this.downloadStatus = new EventEmitter<ProgressStatus>();
     }
     modalRef: BsModalRef;

  ngOnInit(): void {

    this.title="Admin Dashboard";

       this.registerForm = this.formBuilder.group({
       FirstName: this.FirstName,
       LastName: this.LastName,
       Email: this.Email,
       UserName: this.UserName,
       Password: this.Password,
       Role : this.Role,
     })

     this.adminService.getallgroups().subscribe(Response => {
      console.log(Response)
        this.listgroup=Response;
      this.listgroup=this.lg.list; 
       console.log(this.lg);
     });
     
    this.UploadService.getallFiles().subscribe
    (FileList=> {
      console.log(FileList)
      this.allfilelist=FileList;
      this.collection= FileList;
      console.log(this.collection)
    })

    this.archiveService.getallFilesArchived().subscribe
    (ArchivedFileList=> {
      console.log(ArchivedFileList)
      this.allarchivedfilelist=ArchivedFileList;
      this.coll= ArchivedFileList;
      console.log(this.coll)
    })

    this.adminService.getAll().subscribe(UserList => {
      console.log(UserList)
      // If response comes hideloader() function is called
      // to hide that loader 
      if(UserList){  
       hideloader();
       } 
      this.li=UserList;
      this.lis=UserList; 
      console.log(this.lis);
    })
    function hideloader(){
      document.getElementById('loading').style.display = 'block';}
  }

  removegroup(group:group){
    this.adminService.deletegroup(group.groupId).subscribe(res=>res)
    //this.openSnackBar(group.GroupName,"Removed ");  
    location.reload();
    
    }
  public removeuser(user) 
  {
    this.collection.splice(user.id,1)
    this.adminService.deleteUser(user).subscribe(UserList=>{
    console.log("user Deleted",FileList),
    this.toastr.success('User Deleted')
    })

  }
  //ng-template 
  AddModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-md' })
    );
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
    this.registerService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
            data => {
              console.log(data)
              localStorage.setItem('token', data.token)
              this.router.navigate(['/dashboard-admin'])
               this.toastr.success("User added successfully");
            },
            error => {
                this.loading = false;
            });
}

//Archive template 
restore(file){
  
  location.reload();
  console.log(file)
  this.archiveService.restorefile(file.fileId).subscribe(res=>{});
  this.toastr.success(file.fileName,"Restored");
}
public deleteFile(file){
    this.collection.splice(file.fileID,1)
    this.UploadService.deleteFile(file).subscribe(FileList=>{
    console.log("File Deleted",FileList),
    this.toastr.success('File Deleted')
    })
  }

  archivefile(file){
    this.adminService.Archivefile(file.fileid).subscribe(res =>{
      console.log(res)
      this.toastr.success("Archived")
      error => {
        this.loading = false;

    }
  })
  }

  public download() {

    console.log("this is file name"+this.fileName)
    this.downloadStatus.emit( {status: ProgressStatusEnum.START});

    this.UploadService.downloadFile(this.fileName).subscribe(
      data => {
        switch (data.type) {
          case HttpEventType.DownloadProgress:
            this.downloadStatus.emit( {status: ProgressStatusEnum.IN_PROGRESS, percentage: Math.round((data.loaded / data.total) * 100)});
            break;
          case HttpEventType.Response:
            this.downloadStatus.emit( {status: ProgressStatusEnum.COMPLETE});
            const downloadedFile = new Blob([data.body], { type: data.body.type });
            const a = document.createElement('a');
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            a.download = this.fileName;
            a.href = URL.createObjectURL(downloadedFile);
            a.target = '_blank';
            a.click();
            document.body.removeChild(a);
            break;
        }
      },
      error => {
        this.downloadStatus.emit({status: ProgressStatusEnum.ERROR});
      }
    );
  }
}
