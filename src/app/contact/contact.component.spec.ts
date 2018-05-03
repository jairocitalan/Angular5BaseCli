import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivoComponent } from '../reactivo/reactivo.component';
import { PasivoComponent } from '../pasivo/pasivo.component';
import { ContactComponent } from './contact.component';
import { APP_PROVIDERS } from '../app.providers';
import { FormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent,
                       PasivoComponent,
                       ReactivoComponent,
                       ContactComponent],
      imports:[FormsModule],
      providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
