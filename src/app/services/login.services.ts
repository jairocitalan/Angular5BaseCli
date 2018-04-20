import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//desd afuera puedo agragar eventos
@Injectable()
export class LoginServices {

    
  constructor() { }

loginUser(user:string,pass:string){
   return user ==='jairo' && pass === 'jairo123';
     
}
}