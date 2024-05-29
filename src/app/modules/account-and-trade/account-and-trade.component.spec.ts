import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAndTradeComponent } from './account-and-trade.component';

describe('AccountAndTradeComponent', () => {
  let component: AccountAndTradeComponent;
  let fixture: ComponentFixture<AccountAndTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountAndTradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountAndTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
