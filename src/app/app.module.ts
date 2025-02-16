import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecargaQrComponent } from './v1/recarga-qr/recarga-qr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { FeaturesModule } from './features/features.module';


@NgModule({
  declarations: [
    AppComponent,
    RecargaQrComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ZXingScannerModule,
    FeaturesModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Agrega este esquema
  ],
  providers: [
    provideHttpClient(
      withInterceptors([
        authInterceptor
      ])
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
