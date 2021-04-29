import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpRequest, HttpHeaders } from  '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})  
  export class ArchiveService { 
    private apiUrl: string;
    constructor(private httpclient: HttpClient) {
      this.apiUrl = 'https://localhost:44308/api/file';
    }
  
    Archivefile(fileid:number)
    {
      return this.httpclient.post(this.apiUrl +'/archivefile',fileid);

       //var token = localStorage.getItem('token');
       // const httpOptions = {
       // headers: new HttpHeaders().set("Authorization", "Bearer " + token),
       //};
       // return this.httpclient.post(`${'https://localhost:44392/api/admin/archivefile'}?FileId=${fileid}`,httpOptions);
  }
      getallFilesArchived() {
        return this.httpclient.get('https://localhost:44308/file/archivedfiles')
      }

      deleteFile(fileID)
    {
      return this.httpclient.delete('https://localhost:44308/file/DeleteFile'+fileID)
    }

    restorefile(_idfile:number)
    {
     // var token = localStorage.getItem('token');
     // const httpOptions = {
       // headers: new HttpHeaders().set("Authorization", "Bearer " + token),
  // };
  return this.httpclient.post(this.apiUrl +'/restorefile',_idfile);

  //return this.httpclient.post('https://localhost:44308/file/',_idfile);
    }
}