import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestsService } from '../services/requests.service';
import { ResponseDto } from '../models/entities/response.dto';

@Component({
  selector: 'app-recarga-qr',
  standalone: false,

  templateUrl: './recarga-qr.component.html',
  styleUrl: './recarga-qr.component.css'
})
export class RecargaQrComponent implements OnInit{
  isImageExpanded = false;
  amount: number = 0;
  formGroupRecarga: FormGroup;

  constructor(private formBuilder: FormBuilder, private requestsService: RequestsService) {
    this.formGroupRecarga = this.formBuilder.group({
      phoneControl: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Validación de 10 dígitos
    });
  }
  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const code: string | null = urlParams.get('code');
    if (code) {
      this.requestsService.getSatoshis(code).subscribe((response: ResponseDto<number>) => {
      if (response.statusCode !== 200) {
        console.error('Error al obtener los satoshis');
        return;
      }
      this.amount = response.data;
      });
    } else {
      console.error('No se encontró el código en la URL');
    }
  }

  getPhoneControlValue(): string {
    return this.formGroupRecarga.get('phoneControl')?.value || ''; // Retorna el valor o una cadena vacía
  }


  onSubmit() {
    this.requestsService.getFundAll().subscribe((data: any) => {
      console.log(data);
    });
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
