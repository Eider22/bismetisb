import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManualCodeFormComponent } from './features/manual-code-form/manual-code-form.component';
import { QrCodeFormComponent } from './features/qr-code-form/qr-code-form.component';
import { ConsultFundsComponent } from './features/consult-funds/consult-funds.component';

const routes: Routes = [
  {path:'manual-code', component: ManualCodeFormComponent},
  {path:'qr-code', component: QrCodeFormComponent},
  {path:'', component: ConsultFundsComponent}
  // {path:'consult-funds', component: ConsultFundsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
