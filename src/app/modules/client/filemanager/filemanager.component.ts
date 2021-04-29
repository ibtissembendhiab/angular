import { ToastrService } from 'ngx-toastr';
import { UploadService } from './../../../core/services/upload.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { File } from 'src/app/shared/models/file.model';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-filemanager',
  templateUrl: './filemanager.component.html',
  styleUrls: ['./filemanager.component.scss']
})
export class FilemanagerComponent implements OnInit {
  allfilelist;
  modalRef: BsModalRef;
  @Output() public onUploadFinished = new EventEmitter();
  listTab: boolean;
  gridTab: boolean;
  addnewTab: boolean;
  selectedFile: File;
   isLoading: boolean = false;
   public collection:any= [];
   dplistTab: boolean = true;
   dpgridTab: boolean;
   loading: boolean;
   FileName : string;
  

  constructor(private http: HttpClient  ,
              private modalService: BsModalService, 
              private UploadService : UploadService, 
              private toastr:ToastrService, 
              private adminservice : AdminService ) { }

  ngOnInit(): void {

    this.UploadService.getallFiles().subscribe
    (FileList=> {
      console.log(FileList)
      this.allfilelist=FileList;
      this.collection= FileList;
      console.log(this.collection)
    }
    );
    
  }
 
 public deleteFile(file) 
  {
    this.collection.splice(file.fileID,1)
    this.UploadService.deleteFile(file).subscribe(FileList=>{
    console.log("File Deleted",FileList),
    this.toastr.success('File Deleted')
    })

  }

  archivefile(file){
    this.adminservice.Archivefile(file.fileid).subscribe(res =>{
      console.log(res)
      this.toastr.success("Archived")
      error => {
        this.loading = false;

    }
  })
  }

  AddModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-md' })
    );
  }

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

  //à revoir
 /* public download() {
    this.UploadService.downloadFile(this.FileName).subscribe(
      data => {
        switch (data.type) {
          case HttpEventType.DownloadProgress:
            this.toastr.success("File Downloaded");
            break;

          case HttpEventType.Response:
            const downloadedFile = new Blob([data.body], { type: data.body.type });
            const a = document.createElement('a');
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            a.download = this.FileName;
            a.href = URL.createObjectURL(downloadedFile);
            a.target = '_blank';
            a.click();
            document.body.removeChild(a);
            break;
        }
      },
      error => { 
        this.toastr.warning("Failed");
        
      }
    );
  }*/
}
