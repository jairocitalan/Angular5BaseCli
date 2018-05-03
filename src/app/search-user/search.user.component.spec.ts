import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_PROVIDERS } from '../app.providers';
import { SearchUserComponent } from "./search-user.componet";
import { FormsModule } from '@angular/forms';


describe('SearchUserComponent', () => {
  let component: SearchUserComponent;
  let fixture: ComponentFixture<SearchUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserComponent ],
      providers:[APP_PROVIDERS],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoul call onSearchClick',() => {
    component.userName='Jairo Alberto';
    component.onSearchUser.subscribe(x =>{
      expect(x).toEqual('Jairo Alberto');
    });
    component.onSearchClick();
  });

  it('shoul call onSearchClick in view',() => {
    component.userName='Jairo Alberto';
    component.onSearchUser.subscribe(x =>{
      expect(x).toEqual('Jairo Alberto');
    });
    let compile = fixture.nativeElement;
    compile.querySelector('button').click();
  });

});
