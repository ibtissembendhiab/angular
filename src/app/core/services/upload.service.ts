import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpRequest, HttpHeaders } from  '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})  
  export class UploadService { 

    private baseApiUrl: string;
    private apiDownloadUrl: string;
    private apiUploadUrl: string;
    private apiFileUrl: string;

    //folderid: any;
  
    constructor(private httpClient: HttpClient) {
      this.baseApiUrl = 'https://localhost:44308/api/';
      this.apiDownloadUrl = this.baseApiUrl + 'download';
      this.apiUploadUrl = this.baseApiUrl + 'upload';
      this.apiFileUrl = this.baseApiUrl + 'files';
    }

    public downloadFile(file: string): Observable<HttpEvent<Blob>> {
      return this.httpClient.request(new HttpRequest(
        'GET',
        `${this.apiDownloadUrl}?file=${file}`,
        null,
        {
          reportProgress: true,
          responseType: 'blob'
        }));
    }

    public uploadFile(file: Blob): Observable<HttpEvent<void>> {
      const formData = new FormData();
      formData.append('file', file);
    
      return this.httpClient.request(new HttpRequest(
        'POST',
        this.apiUploadUrl,
        formData,
        {
          reportProgress: true
        }));
      }
    
   /* public uploadFile(file: File): Observable<HttpEvent<{}>> {
      
      var token = localStorage.getItem('token');
      const httpOptions = {
        headers: new HttpHeaders().set("Authorization", "Bearer " + token),
      };
  
      const formData = new FormData();
      formData.set('files', file, file.name);
      
      const req = new HttpRequest(
        'POST',
        `${this.apiUploadUrl}`,
        formData,
        httpOptions
      );
      return this.httpClient.request(req);
    }*/

    public getFiles(): Observable<string[]> {
      return this.httpClient.get<string[]>(this.apiFileUrl);
    }
  }

