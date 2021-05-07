import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { group } from 'src/app/shared/models/group.model';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    constructor(public http: HttpClient) {}
    
    getallgroups():Observable<group[]>{

       // let header = new HttpHeaders();
          // header.append('Content-Type', 'application/json');
           //let authToken = localStorage.getItem('auth_token');
          // header.append('Authorization', `Bearer ${authToken}`);
       
           //var token = localStorage.getItem('token');
          // const httpOptions = {
          //   headers: new HttpHeaders().set("Authorization", "Bearer " + token),
          // };
       
           return this.http.get<group[]>('https://localhost:44308/api/group/allgroups');
         }

         deletegroup(idgroup:number){
          //  var token = localStorage.getItem('token');
           // const httpOptions = {
             // headers: new HttpHeaders().set("Authorization", "Bearer " + token),
        // };
         return this.http.post('https://localhost:44308/api/group/deletegroup', idgroup);
          }

    getAll() {
        return this.http.get<any[]>(`https://localhost:44308/api/User/GetAllUsers`);
      }

      //  deletegroup(idgroup:number){
      //  var token = localStorage.getItem('token');
      //  const httpOptions = {
       //   headers: new HttpHeaders().set("Authorization", "Bearer " + token),
     // };
     //return this.http.post(`${'https://localhost:44308/api/deletegroup'}?id=${idgroup}`,httpOptions);
     // }

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