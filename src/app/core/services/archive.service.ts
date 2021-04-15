import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpRequest, HttpHeaders } from  '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})  
  export class ArchiveService { 
    private apiDownloadUrl: string;
    constructor(private httpclient: HttpClient) {
      this.apiDownloadUrl = 'https://localhost:44308/api/file';
    }
  

    getallFilesArchived() {
        return this.httpclient.get('https://localhost:44308/file/archivedfiles')
      }

      deleteFile(fileID)
    {
      return this.httpclient.delete('https://localhost:44308/file/DeleteFile'+fileID)
    }
    
}