import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
//import { of } from 'rxjs';
//import { catchError, map } from 'rxjs/operators';
import { UploadService } from 'src/app/core/services/upload.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

 
export class ContactsComponent implements OnInit {
  @Input() public disabled: boolean;
  
  @ViewChild('inputFile') inputFile: ElementRef;
  listTab: boolean;
  gridTab: boolean;
  addnewTab: boolean;
  selectedFile: File;
  constructor(private service: UploadService) { }
    
  onTab(number) {
    this.listTab = false;
    this.gridTab = false;
    this.addnewTab = false;
    if (number == '1') {
      this.listTab = true;
    }
    else if (number == '2') {
      this.gridTab = true;
    }
    else if (number == '3') {
      this.addnewTab = true;
    }
  }
  ngOnInit(): void { }

  public uploadFile (event) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.service.uploadFile(file).subscribe(
        data => {
          if (data) {
            switch (data.type) {
              case HttpEventType.UploadProgress:

                break;
              case HttpEventType.Response:
                this.inputFile.nativeElement.value = '';
                break;
            }
          }
        },
        error => {
          this.inputFile.nativeElement.value = '';
        }
      );
    }
  } 
  
  /*addnewTab: boolean;
  gridTab: boolean;
  listTab: boolean = true;
  public progress: number;
  public message: string;
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;
  files  = [];
  //@ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;files  = [];  

  @Output() public onUploadFinished = new EventEmitter();

  onTab(number) {

    this.listTab = false;
    this.gridTab = false;
    this.addnewTab = false;
    if (number == '1') {
      this.listTab = true;
    }
    else if (number == '2') {
      this.gridTab = true;
    }
    else if (number == '3') {
      this.addnewTab = true;
    }
  }*/
 /* constructor(private http: HttpClient, private service: UploadService) { }

  ngOnInit() {
  }*/

  /*uploadFile(file) {  
    const formData = new FormData();  
    formData.append('file', file.data);  
    file.inProgress = true;  
    this.service.upload(formData).pipe(  
      map(event => {  
        switch (event.type) {  
          case HttpEventType.UploadProgress:  
            file.progress = Math.round(event.loaded * 100 / event.total);  
            break;  
          case HttpEventType.Response:  
            return event;  
        }  
      }),  
      catchError((error: HttpErrorResponse) => {  
        file.inProgress = false;  
        return of(`${file.data.name} upload failed.`);  
      })).subscribe((event: any) => {  
        if (typeof (event) === 'object') {  
          console.log(event.body);  
        }  
      });  
  } 

 /* private uploadFiles() {  
    this.fileUpload.nativeElement.value = '';  
    this.files.forEach(file => {  
      this.uploadFile(file);  
    });  
} */


/*onClick() {  
    const fileUpload = this.fileUpload.nativeElement;fileUpload.onchange = () => {  
    for (let index = 0; index < fileUpload.files.length; index++)  
    {  
     const file = fileUpload.files[index];  
     //this.files.push({ data: file, inProgress: false, progress: 0});  
    }  
     // this.uploadFiles();  
    };  
    fileUpload.click();  
}

/* public uploadFile = (files) => {
    if (files.length === 0) {
      return;
        }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
      this.http.post('https://localhost:44308/api/upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (
          event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
        }
      );
  }

  /*onTab(number) {
    this.listTab = false;
    this.gridTab = false;
    this.addnewTab = false;
    if (number == '1') {
      this.listTab = true;
    }
    else if (number == '2') {
      this.gridTab = true;
    }
    else if (number == '3') {
      this.addnewTab = true;
    }
  }
  ngOnInit(): void {
  }
  sweettalert7() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonColor: "rgb(220, 53, 69)",
      confirmButtonText: 'Yes, delete it!',

    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  } */

}
