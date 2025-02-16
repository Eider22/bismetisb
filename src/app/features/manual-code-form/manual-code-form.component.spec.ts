import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualCodeFormComponent } from './manual-code-form.component';

describe('ManualCodeFormComponent', () => {
  let component: ManualCodeFormComponent;
  let fixture: ComponentFixture<ManualCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManualCodeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
