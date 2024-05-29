import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningAndAdviceComponent } from './planning-and-advice.component';

describe('PlanningAndAdviceComponent', () => {
  let component: PlanningAndAdviceComponent;
  let fixture: ComponentFixture<PlanningAndAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanningAndAdviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanningAndAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
