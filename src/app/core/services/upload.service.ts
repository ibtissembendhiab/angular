import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpRequest, HttpHeaders } from  '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})  
  export class UploadService { 
  
    private API_BASE_URL = 'https://localhost:44803/api/upload';
    
  
    constructor(private httpClient: HttpClient) {}
  
    public uploadFile(file: Blob): Observable<HttpEvent<void>> {
      const formData = new FormData();
      formData.append('file',file);

      return this.httpClient.request(new HttpRequest(
        'POST',
        this. API_BASE_URL,
        formData,
        {
          reportProgress: true
        }));
      
  }

  }

