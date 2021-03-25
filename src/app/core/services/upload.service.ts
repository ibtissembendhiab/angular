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
/*import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
 private API_BASE_URL = 'https://localhost:44308/api/upload';
  folderid: any;

  constructor(private httpClient: HttpClient) {}

  public uploadFile(file: File): Observable<HttpEvent<{}>> {

    //this.folderservice.folderidtoupload.subscribe((res)=>{console.log("resultat"+ res)
 //this.folderid=res; 
 // console.log("this.fid"+this.folderid)})

    var token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders().set("Authorization", "Bearer " + token),
    };

    const formData = new FormData();
    formData.set('files', file, file.name);
    formData.set('idfolder',this.folderid);
    



    const req = new HttpRequest(
      'POST',
      `${this.API_BASE_URL}`,
      formData,
      httpOptions
    );
    return this.httpClient.request(req);
  }
}*/
/*
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { Injectable } from '@angular/core';


@Injectable({  
    providedIn: 'root'  
  })  
  export class UploadService { 
    readonly BaseURI = 'https://localhost:44308/api';
      constructor(private httpClient: HttpClient) { }

      public upload(formData) {

        return this.httpClient.post<any>(this.BaseURI+'/upload', formData, {  
          reportProgress: true,  
          observe: 'events'  
        });  
    }
}*/
