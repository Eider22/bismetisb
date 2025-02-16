import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeFormComponent } from './qr-code-form.component';

describe('QrCodeFormComponent', () => {
  let component: QrCodeFormComponent;
  let fixture: ComponentFixture<QrCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QrCodeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
