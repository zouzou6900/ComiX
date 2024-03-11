import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUtilsComponent } from './header-utils.component';

describe('HeaderUtilsComponent', () => {
  let component: HeaderUtilsComponent;
  let fixture: ComponentFixture<HeaderUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderUtilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
