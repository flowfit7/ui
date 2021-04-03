import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicespackagesComponent } from './servicespackages.component';

describe('ServicespackagesComponent', () => {
  let component: ServicespackagesComponent;
  let fixture: ComponentFixture<ServicespackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicespackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicespackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
