import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpRequest, HttpHeaders } from  '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})  
  export class UploadService { 
  
    constructor(private httpclient: HttpClient) {}
  
   /* public uploadFile(file: Blob): Observable<HttpEvent<void>> {
      const formData = new FormData();
      formData.append('file',file);

      return this.httpclient.request(new HttpRequest(
        'POST','https://localhost:44308/api/upload',
        formData,
        {
          reportProgress: true
        }));
      }*/


    getallFiles() {
      return this.httpclient.get('https://localhost:44308/file/GetAllFiles')
    }

    deleteFile(fileID)
    {
      return this.httpclient.delete('https://localhost:44308/file/DeleteFile'+fileID)
    }
      
    public downloadFile(fileName) {
      return this.httpclient.get('https://localhost:44308/api/download' +fileName);
    }
      
  }

  

