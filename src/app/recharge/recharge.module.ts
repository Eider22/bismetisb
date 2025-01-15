import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechargeRoutingModule } from './recharge-routing.module';
import { RechargeFormComponent } from './recharge-form/recharge-form.component';


@NgModule({
  declarations: [
    RechargeFormComponent
  ],
  imports: [
    CommonModule,
    RechargeRoutingModule
  ]
})
export class RechargeModule { }
