import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayKapriComponent } from './pay-kapri.component';

describe('PayKapriComponent', () => {
  let component: PayKapriComponent;
  let fixture: ComponentFixture<PayKapriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayKapriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayKapriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
