import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSearchComponent } from './quick-search.component';

describe('QuickSearchComponent', () => {
  let component: QuickSearchComponent;
  let fixture: ComponentFixture<QuickSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuickSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
