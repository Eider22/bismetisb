import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargaQrComponent } from './recarga-qr.component';

describe('RecargaQrComponent', () => {
  let component: RecargaQrComponent;
  let fixture: ComponentFixture<RecargaQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecargaQrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecargaQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
