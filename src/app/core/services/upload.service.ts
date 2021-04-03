import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpRequest, HttpHeaders } from  '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})  
  export class UploadService { 
  
    private API_BASE_URL = 'https://localhost:44803/api/upload';
    folderid: any;
  
    constructor(private httpClient: HttpClient) {}
  
    public uploadFile(file: File): Observable<HttpEvent<{}>> {
      
      var token = localStorage.getItem('token');
      const httpOptions = {
        headers: new HttpHeaders().set("Authorization", "Bearer " + token),
      };
  
      const formData = new FormData();
      formData.set('files', file, file.name);
      
      const req = new HttpRequest(
        'POST',
        `${this.API_BASE_URL}`,
        formData,
        httpOptions
      );
      return this.httpClient.request(req);
    }

  }

