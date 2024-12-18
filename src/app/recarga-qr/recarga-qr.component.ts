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
  amount: number = 300;
  formGroupRecarga: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupRecarga = this.formBuilder.group({
      phoneControl: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Validación de 10 dígitos
    });
  }

  getPhoneControlValue(): string {
    return this.formGroupRecarga.get('phoneControl')?.value || ''; // Retorna el valor o una cadena vacía
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
