import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpRequest, HttpHeaders } from  '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})  
  export class UploadService { 
    private apiDownloadUrl: string;
    constructor(private httpclient: HttpClient) {
      this.apiDownloadUrl = 'https://localhost:44308/api/download';
    }
  
    public uploadFile(file: Blob): Observable<HttpEvent<void>> {
      const formData = new FormData();
      formData.append('file',file);

      return this.httpclient.request(new HttpRequest(
        'POST','https://localhost:44308/api/upload',
        formData,
        {
          reportProgress: true
        }));
      }
      public downloadFile(filename: string): Observable<HttpEvent<Blob>> {

        return this.httpclient.request(new HttpRequest(
          'GET',
          `${this.apiDownloadUrl}?filename=${filename}`,
          null,
          {
            reportProgress: true,
            responseType: 'blob'
            
          }));
      
      }
    /*  public downloadFile(file: string): Observable<HttpEvent<Blob>> {
        return this.httpclient.request(new HttpRequest(
          'GET',
          `${this.apiDownloadUrl}?file=${file}`,
          null,
          {
            reportProgress: true,
            responseType: 'blob'
          }));
      }*/

    getallFiles() {
      return this.httpclient.get('https://localhost:44308/file/GetAllFiles')
    }

    deleteFile(fileID)
    {
      return this.httpclient.delete('https://localhost:44308/file/DeleteFile'+fileID)
    }
    
      
  }

  

