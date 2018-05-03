import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from '../contact/contact.component';
import { GitHubCardComponent } from "../git-hub-card/git-hub-car.component";
import { MainComponent } from './main.component';
import { SearchUserComponent } from "../search-user/search-user.componet";
import { MATERIAL_COMPONENTS } from "../app.module";
import { PasivoComponent } from '../pasivo/pasivo.component';
import { ReactivoComponent } from '../reactivo/reactivo.component';
import { LoginComponent } from "../login/login.component";
import { AboutComponent } from '../about/about.component';
import { FormsModule } from '@angular/forms';
import { APP_PROVIDERS } from '../app.providers';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GitHubService } from "../services/git-hut.service";
import { GitHubServiceMock } from "../../mock-services/git-hut.service.mock";


describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent,
                      GitHubCardComponent,
                      ContactComponent,
                      SearchUserComponent,
                      PasivoComponent,
                      ReactivoComponent,
                      LoginComponent,
                      AboutComponent],
      imports:[MATERIAL_COMPONENTS,FormsModule,HttpClientModule,BrowserAnimationsModule],
      providers: [{provide:GitHubService,useClass:GitHubServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add three elemnet to card array', () =>{
    component.onSearchUser('ingjavier');
    component.onSearchUser('ingjavier');
    component.onSearchUser('ingjavier');
    expect(component.gitHubDataList.length).toEqual(3);
  })

});
