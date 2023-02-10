import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CURDOparationComponent } from './curd-oparation.component';

describe('CURDOparationComponent', () => {
  let component: CURDOparationComponent;
  let fixture: ComponentFixture<CURDOparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CURDOparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CURDOparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
