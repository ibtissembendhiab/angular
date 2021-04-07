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
  
<<<<<<< HEAD
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
  
=======
    private API_BASE_URL = 'https://localhost:44803/api/upload';
    
  
    constructor(private httpClient: HttpClient) {}
  
    public uploadFile(file: Blob): Observable<HttpEvent<void>> {
>>>>>>> b614d94a9fdc9e6ba2fd4d4f1d2d22598063f6f3
      const formData = new FormData();
      formData.append('file',file);

      return this.httpClient.request(new HttpRequest(
        'POST',
<<<<<<< HEAD
        `${this.apiUploadUrl}`,
        formData,
        httpOptions
      );
      return this.httpClient.request(req);
    }*/
=======
        this. API_BASE_URL,
        formData,
        {
          reportProgress: true
        }));
      
  }
>>>>>>> b614d94a9fdc9e6ba2fd4d4f1d2d22598063f6f3

    public getFiles(): Observable<string[]> {
      return this.httpClient.get<string[]>(this.apiFileUrl);
    }
  }

