import { Component,OnInit,OnDestroy, Input} from "@angular/core";
import { LoginServices } from "../services/login.services";
import { Router } from "@angular/router";

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit ,OnDestroy{
   // router: any;
    public user: string;
    public pass:string;
    public passConf:string;
    public mail:string;
    public nombre:string;
    public condiciones:boolean; 
    

    constructor(private _login: LoginServices,public router:Router){
       
    }

     logeo(){
     this._login.loginUser(this.user,this.pass,this.passConf,this.mail,this.nombre,this.condiciones)  ?
      this.router.navigate(['']) : 
      alert('Error en usuario o contraseña');
      
    }
    
    ngOnInit() {
      
    }
    ngOnDestroy() {
        
    }


}