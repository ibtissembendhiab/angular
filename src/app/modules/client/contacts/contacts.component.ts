import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
//import { of } from 'rxjs';
//import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

 
export class ContactsComponent implements OnInit {
 // @Input() public disabled: boolean;
  @Output() public onUploadFinished = new EventEmitter();
 // @ViewChild('inputFile') inputFile: ElementRef;
  listTab: boolean;
  gridTab: boolean;
  addnewTab: boolean;
  selectedFile: File;
  loading: false;
  public progress: number;
  public message: string;
  constructor(private http: HttpClient) { }
    
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


  onReset() {
   
  }

  ngOnInit(): void { }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
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
}
