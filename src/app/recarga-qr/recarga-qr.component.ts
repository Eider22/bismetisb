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
      amountControl: [{ value: 500, disabled: true }, [Validators.required, Validators.min(500)]] // Valor predeterminado deshabilitado
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
