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
    private user: string;
    private pass:string;
    constructor(private _login: LoginServices,private router:Router){
       
    }

    logeo(){
     if(this._login.loginUser(this.user,this.pass)){
        this.router.navigate(['']);
     }
     else{
         alert('Error en usuario o contraseña');
     }
    }
    
    ngOnInit() {
      
    }
    ngOnDestroy() {
        
    }


}