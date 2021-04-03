import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingprogramComponent } from './trainingprogram.component';

describe('TrainingprogramComponent', () => {
  let component: TrainingprogramComponent;
  let fixture: ComponentFixture<TrainingprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingprogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
