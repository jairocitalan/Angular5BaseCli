import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_PROVIDERS } from '../app.providers';
import { GitHubCardComponent } from './git-hub-car.component';
import { GitHubModel } from "../model/git-hub-model";

describe('GitHubCardComponent', () => {
  let component: GitHubCardComponent;
  let fixture: ComponentFixture<GitHubCardComponent>;
  let gitHubData: GitHubModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubCardComponent ],
      providers:[APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    gitHubData= new GitHubModel();
    gitHubData.avatar_url='';
    gitHubData.followers='1';
    gitHubData.following='1';
    gitHubData.login='Jairox';
    gitHubData.name='Jairo Alberto';
    fixture = TestBed.createComponent(GitHubCardComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate model in the view', () => {
    component.gitHubData=gitHubData;
    const compile= fixture.nativeElement;//jalar los elemenntos del DOM
    fixture.detectChanges();//sirve para generar la vista
    expect(compile.querySelector('#name').textContent).toContain(`Nombre: ${gitHubData.name}`);
  })

});
