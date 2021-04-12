import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpRequest, HttpHeaders } from  '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


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
    private API_BASE_URL = 'https://localhost:44308/api/upload';
    
  
    constructor(private httpclient: HttpClient) {}
  
    public uploadFile(file: Blob): Observable<HttpEvent<void>> {
      const formData = new FormData();
      formData.append('file',file);

      return this.httpclient.request(new HttpRequest(
=======
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
>>>>>>> 0932ae6727bbcf84c6b90aa9620be879c2b894e0
        'POST',
        this.apiUploadUrl,
        formData,
        {
          reportProgress: true
        }));
      }
<<<<<<< HEAD


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
    
      

      
=======
    
   /* public uploadFile(file: File): Observable<HttpEvent<{}>> {
      
      var token = localStorage.getItem('token');
      const httpOptions = {
        headers: new HttpHeaders().set("Authorization", "Bearer " + token),
      };
  
      const formData = new FormData();
      formData.append('file',file);

      return this.httpClient.request(new HttpRequest(
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
>>>>>>> 0932ae6727bbcf84c6b90aa9620be879c2b894e0
  }

  

