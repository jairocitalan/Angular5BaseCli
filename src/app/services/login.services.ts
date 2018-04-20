import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//desd afuera puedo agragar eventos
@Injectable()
export class LoginServices {

    
  constructor() { }

loginUser(user:string,pass:string){
    if(user=='jairo' && pass =='jairo123'){
        console.log(`user:${user} pass:${pass}`);
        return true;
    }else{
        return false;
       
    }
    
    
}
}