import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//desd afuera puedo agragar eventos
@Injectable()
export class LoginServices {

    
  constructor() { }

loginUser(user:string,pass:string,passConf:string,mail:string,nombre:string,condiciones:boolean){
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
  let pas=regex.test(pass) ? true : false;
  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  let cor= emailRegex.test(mail) ? true : false;
  let filterLetras=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
  let vLetras=filterLetras.test(nombre);
  
  
   if(user.length >= 5 && user.length <= 15 && pas == true && pass==passConf 
     && cor==true && vLetras==true && condiciones==true ){
      return true;
   }


     
}
}