import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToUpperCaseComponent } from './to-upper-case.component';

describe('ToUpperCaseComponent', () => {
  let component: ToUpperCaseComponent;
  let fixture: ComponentFixture<ToUpperCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToUpperCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToUpperCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
