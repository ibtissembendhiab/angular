import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(public http: HttpClient) {}

     getAll() {
     return this.http.get<any[]>(`https://localhost:44308/api/User/GetAllUsers`);

   }


   /*deleteUser(id)
    {
      return this.http.delete('https://localhost:44308/api/User/Delete'+id)
    }*/
}