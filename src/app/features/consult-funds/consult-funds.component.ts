import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ResponseDto } from '../../v1/models/entities/response.dto';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestsService } from '../../v1/services/requests.service';
import { Router } from '@angular/router';
import { DoTopUpDto } from '../../v1/models/dtos/do-top-up.dto';

@Component({
  selector: 'app-consult-funds',
  standalone: false,

  templateUrl: './consult-funds.component.html',
  styleUrl: './consult-funds.component.css'
})
export class ConsultFundsComponent {
 isImageExpanded = false;
  amount: number = 0;
  formGroupRecarga: FormGroup;
  code: string | null= '';
  loadedCode = false;

  // **********************
  codeResult: string | null = null;

// onCodeResult(result: string): void {
//   this.codeResult = result;
//   console.log('QR detectado:', result);

// }

scannerEnabled = false; // Controla si el escáner está habilitado o no

  onCodeResult(result: string): void {
    alert(`Código escaneado: ${result}`);
    result = result.split('code=')[1]; // Extrae el código del resultado del escáner
    this.getcodeControl()?.setValue(result); // Asigna el valor del código escaneado al control

  }

  toggleScanner(): void {
    this.scannerEnabled = !this.scannerEnabled; // Activa o desactiva el escáner
  }


  // **********************

  constructor(private formBuilder: FormBuilder, private requestsService: RequestsService, private router: Router) {
    this.formGroupRecarga = this.formBuilder.group({
      phoneControl: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Validación de 10 dígitos
      codeControl: [this.code, [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*()_+=-]*$/)]],
    });
  }
  ngOnInit(): void {
    this.getSatoshisByCode();
    this.loadCode();
    this.updateNewFormGroup();
  }

 updateNewFormGroup() {
    this.formGroupRecarga = this.formBuilder.group({
      phoneControl: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Validación de 10 dígitos
      codeControl: [this.code, [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*()_+=-]*$/)]],
    });
  }

  loadCode() {
    const urlParams = new URLSearchParams(window.location.search);
    this.code = urlParams.get('code');
    this.refreshLoadedCodeBag();
    this.getSatoshisByCode();
  }

  refreshLoadedCodeBag() {
    if(this.code !== null) {
      this.loadedCode = true;
      return;
    }

    this.loadedCode = false;
  }

  confirmCode(){
    this.code = this.getcodeControlValue();
    this.getSatoshisByCode();
    this.loadedCode = true;
  }

  getSatoshisByCode() {
    if (this.code) {
      this.requestsService.getSatoshis(this.code).subscribe((response: ResponseDto<number>) => {
      if (response.statusCode !== 200) {
        Swal.fire({
          title: "Error al obtener monto",
          text: response.message,
          icon: "warning",
          draggable: true,
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#3085d6",
        });
        return;
      }
      this.amount = response.data;
      });
    } else {
      console.error('No se encontró el código en la URL');
    }
  }

  getPhoneControl(): AbstractControl | null {
    return this.formGroupRecarga.get('phoneControl'); // Retorna el valor o una cadena vacía
  }

  getcodeControl():  AbstractControl | null {
    return this.formGroupRecarga.get('codeControl'); // Retorna el valor o una cadena vacía
  }

  getPhoneControlValue(): string {
    return this.formGroupRecarga.get('phoneControl')?.value || ''; // Retorna el valor o una cadena vacía
  }

  getcodeControlValue(): string {
    return this.formGroupRecarga.get('codeControl')?.value || ''; // Retorna el valor o una cadena vacía
  }

  viewFunds() {
    this.requestsService.getFunds(this.getPhoneControlValue()).subscribe((responseDto: ResponseDto<number>) => {
      console.log("responseDto: " + JSON.stringify(responseDto));
      if (responseDto.statusCode !== 200) {
        Swal.fire({
          title: "Error al obtener fondos",
          text: responseDto.message,
          icon: "warning",
          draggable: true,
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#3085d6",
        });
        return;
      }
      Swal.fire({
        title: "Fondos actuales",
        text: `Tus fondos actuales son: ${responseDto.data} satoshis`,
        icon: "success",
        draggable: true,
        confirmButtonText: "Aceptar",
      });
    }, (error: any) => {
      console.log("error: " + JSON.stringify(error));
      Swal.fire({
        title: "Error al obtener fondos",
        text: "Ocurrió un error inesperado",
        icon: "error",
        draggable: true,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6",});
      });
    }


  onSubmit() {
    // this.router.navigate(['/qr-code'],{queryParams: {code: this.getcodeControlValue()}});
    if (this.formGroupRecarga.valid) {
      console.log('Recarga exitosa');
    } else {
      console.log('Recarga fallida');
    }
    const topUpData: DoTopUpDto = {
      phone: this.getPhoneControlValue(),
      code: this.getcodeControlValue(),
    } as DoTopUpDto;
    this.requestsService.doTopUp(topUpData).subscribe((responseDto: ResponseDto<any>) => {
      console.log("responseDto: " + JSON.stringify(responseDto));
      if (responseDto.statusCode !== 200) {
        Swal.fire({
          title: "Error al recargar",
          text: responseDto.message,
          icon: "warning",
          draggable: true,
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#3085d6",
        });
        return;
      }
      Swal.fire({
        html: `Se ha recargado el monto de ${this.amount} satoshis al número ${this.getPhoneControlValue()}<br><br><b>Sus fondos:</b> ${responseDto.data} satoshis`,
        icon: "success",
        draggable: true,
        confirmButtonText: "Aceptar",
      });
    }, (error: any) => {

      console.log("error: " + JSON.stringify(error));
      Swal.fire({
        title: "Error al recargar",
        text: "Ocurrió un error inesperado",
        icon: "error",
        draggable: true,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6",}
      );


    });
  }

  expandImage() {
    this.isImageExpanded = !this.isImageExpanded;
  }
}
