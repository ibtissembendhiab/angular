import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    constructor() {}

    log(msg: string) {
        console.log(msg);
    }

    logError(msg: string) {
        console.error(msg);
    }

  //  getAll() {
       // return this.http.get<any[]>(`${config.BaseURI}/GetAllUsers`);
  //  }
   
}