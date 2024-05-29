import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyFidelityComponent } from './why-fidelity.component';

describe('WhyFidelityComponent', () => {
  let component: WhyFidelityComponent;
  let fixture: ComponentFixture<WhyFidelityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyFidelityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyFidelityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
