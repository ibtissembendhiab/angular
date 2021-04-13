import { ToastrService } from 'ngx-toastr';
import { UploadService } from './../../../core/services/upload.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { File } from 'src/app/shared/models/file.model';

@Component({
  selector: 'app-filemanager',
  templateUrl: './filemanager.component.html',
  styleUrls: ['./filemanager.component.scss']
})
export class FilemanagerComponent implements OnInit {
  allfilelist;
  modalRef: BsModalRef;
  @Output() public onUploadFinished = new EventEmitter();
  public progress: number;
  public message: string;
  
   isLoading: boolean = false;
   public collection:any= [];
   dplistTab: boolean = true;
   dpgridTab: boolean;

  constructor(private http: HttpClient  ,private modalService: BsModalService, private UploadService : UploadService, private toastr:ToastrService ) { }

  ngOnInit(): void {

    this.UploadService.getallFiles().subscribe(FileList=> {
      console.log(FileList)
      this.allfilelist=FileList;
      this.collection= FileList;
      console.log(this.collection)
    }
    //(error: any[]) => console.log('Error: ' + error),
    //() => console.log('Completed')
    );
    
  }

  public deleteFile(file) 
  {
    this.collection.splice(file.fileID,1)
    this.UploadService.deleteFile(file).subscribe(FileList=>{
    console.log("File Deleted",FileList)
    })

  }

  downloadFile(fileName) {
    this.UploadService.downloadFile(fileName).subscribe((response) => {
        this.message = response['message'];
    });
}


  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file',  fileToUpload.FileName);
    this.http.post('https://localhost:44308/api/upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
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

}