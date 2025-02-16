import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ManualCodeFormComponent } from './manual-code-form/manual-code-form.component';
import { QrCodeFormComponent } from './qr-code-form/qr-code-form.component';
import { ConsultFundsComponent } from './consult-funds/consult-funds.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    ManualCodeFormComponent,
    QrCodeFormComponent,
    ConsultFundsComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports: [
    ManualCodeFormComponent,
    QrCodeFormComponent,
    ConsultFundsComponent
  ]
})
export class FeaturesModule { }
