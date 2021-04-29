import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    constructor(public http: HttpClient) {}

    getAll() {
        return this.http.get<any[]>(`https://localhost:44308/api/User/GetAllUsers`);
      }
      
     Archivefile(fileid:number){
         var token = localStorage.getItem('token');
         const httpOptions={
             headers: new HttpHeaders().set("Authorization", "Bearer"+ token),
         };
         return this.http.post('https://localhost:44308/file/archivefile'+fileid, httpOptions);
     }
     
     deleteUser(id)
     {
       return this.http.delete('https://localhost:44308/api/User/Delete'+id)
     }
   
}