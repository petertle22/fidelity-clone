import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTradingComponent } from './account-trading.component';

describe('AccountTradingComponent', () => {
  let component: AccountTradingComponent;
  let fixture: ComponentFixture<AccountTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountTradingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
