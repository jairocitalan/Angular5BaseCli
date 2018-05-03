import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {MATERIAL_COMPONENTS } from "../app.module";
import { APP_PROVIDERS } from "../app.providers";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => { //se ejecuta nates de las pruebas unitarias
    TestBed.configureTestingModule({//configura mi module de testing
      declarations: [ AboutComponent ],
      imports: [MATERIAL_COMPONENTS,
                HttpClientModule,
                BrowserAnimationsModule],
      providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
