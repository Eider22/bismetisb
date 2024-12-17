import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recarga-qr',
  standalone: false,

  templateUrl: './recarga-qr.component.html',
  styleUrl: './recarga-qr.component.css'
})
export class RecargaQrComponent {
  isImageExpanded = false;
  formGroupRecarga: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupRecarga = this.formBuilder.group({
      phoneControl: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Validación de 10 dígitos
      amountControl: ['', [Validators.required, Validators.min(500)]] // Valor mínimo de recarga
    });
  }


  onSubmit() {
    if (this.formGroupRecarga.valid) {
      console.log('Recarga exitosa');
    } else {
      console.log('Recarga fallida');
    }
  }

  expandImage() {
    this.isImageExpanded = !this.isImageExpanded;
  }
}
