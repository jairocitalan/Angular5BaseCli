import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_PROVIDERS } from '../app.providers';
import { LoginComponent } from "../login/login.component";
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { routes } from '../app.component';
import { MainComponent } from '../main/main.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { SearchUserComponent } from "../search-user/search-user.componet";
import { GitHubCardComponent } from "../git-hub-card/git-hub-car.component";
import { MATERIAL_COMPONENTS } from "../app.module";
import { PasivoComponent } from '../pasivo/pasivo.component';
import { ReactivoComponent } from '../reactivo/reactivo.component';
import { APP_BASE_HREF } from "@angular/common";


describe('LoginComponent', () => {
  let component: LoginComponent ;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent,
                      MainComponent,
                      AboutComponent,
                      ContactComponent,
                      SearchUserComponent,
                      GitHubCardComponent,
                      PasivoComponent,
                      ReactivoComponent ],
      providers:[{provide:APP_BASE_HREF,useValue:'/'},APP_PROVIDERS
                ],
      imports:[FormsModule,
               RouterModule.forRoot(routes),
               MATERIAL_COMPONENTS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Validando Ingreso de Usuarios',() => {
    
    component.user='jairo';
    component.pass='Jairo12#';
    component.passConf="Jairo12#";
    component.nombre="jairo";
    component.mail="jairo@gmail.com";
    component.condiciones=true;
    

    let navigateSpy = spyOn((<any>component).router, 'navigate');
    
    component.logeo();

    expect(navigateSpy).toHaveBeenCalledWith(['']);

    });

    
  it('Validando Registro de Usuario Incorecto', () =>{
     
   component.user="kokoko";
   component.pass="www";
   component.passConf="Jaieue";
   component.nombre="jairo838";
   component.mail="jairogmail.com";
   component.condiciones=false;
   
   let compile = fixture.nativeElement;
  let spy= spyOn(window,'alert');
   compile.querySelector('button').click();
   expect(spy).toHaveBeenCalledWith('Error en usuario o contraseña');
  // expect(window.alert).toHaveBeenCalledWith('Error en usuario o contraseña');

  });  


it('Validado longitus de User Name',() =>{

});






/*
  it('shoul call onSearchClick in view',() => {
    component.userName='Jairo Alberto';
    component.onSearchUser.subscribe(x =>{
      expect(x).toEqual('Jairo Alberto');
    });
    let compile = fixture.nativeElement;
    compile.querySelector('button').click();
  });*/

});
