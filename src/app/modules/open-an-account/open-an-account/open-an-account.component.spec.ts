import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAnAccountComponent } from './open-an-account.component';

describe('OpenAnAccountComponent', () => {
  let component: OpenAnAccountComponent;
  let fixture: ComponentFixture<OpenAnAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenAnAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenAnAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
