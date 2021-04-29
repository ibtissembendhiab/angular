import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(public http: HttpClient) {}

     getAll() {
     return this.http.get<any[]>(`https://localhost:44308/api/User/GetAllUsers`);
   }

   CreateGroup(data) {
    return this.http.post("https://localhost:44308/api/Group/addgroup", data);
  }

  Addusertogroup(a:number,z:number){

   var token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders().set("Authorization", "Bearer " + token),
    };
   //  var idGroup=data.group;
   // var idUser=data.user;
   return this.http.post(`${'https://localhost:44308/api/Group/addusertogroup'}?iduser=${a}&idgroup=${z}`,httpOptions);
  }

   /*deleteUser(id)
    {
      return this.http.delete('https://localhost:44308/api/User/Delete'+id)
    }*/
}