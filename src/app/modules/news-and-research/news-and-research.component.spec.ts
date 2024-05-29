import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndResearchComponent } from './news-and-research.component';

describe('NewsAndResearchComponent', () => {
  let component: NewsAndResearchComponent;
  let fixture: ComponentFixture<NewsAndResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsAndResearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsAndResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
