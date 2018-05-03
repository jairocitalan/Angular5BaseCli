import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GitHubCardComponent } from "./git-hub-card/git-hub-car.component";
import { SearchUserComponent } from "./search-user/search-user.componet";
import { PasivoComponent } from './pasivo/pasivo.component';
import { ReactivoComponent } from './reactivo/reactivo.component';
import { LoginComponent } from "./login/login.component";
import { routes } from './app.component';
import { APP_BASE_HREF } from "@angular/common";
import { MATERIAL_COMPONENTS } from "./app.module";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainComponent,
        ContactComponent,
        LoginComponent,
        SearchUserComponent,
        GitHubCardComponent,
        AboutComponent,
        PasivoComponent,
        ReactivoComponent
      ],
      imports: [RouterModule.forRoot(routes),FormsModule,BrowserAnimationsModule,
        MATERIAL_COMPONENTS],
      providers:[{provide:APP_BASE_HREF,useValue:'/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  
  
  it('mat-toolbar', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('Menu');
  }));
});
