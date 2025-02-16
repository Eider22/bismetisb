import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultFundsComponent } from './consult-funds.component';

describe('ConsultFundsComponent', () => {
  let component: ConsultFundsComponent;
  let fixture: ComponentFixture<ConsultFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultFundsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
