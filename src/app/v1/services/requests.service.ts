import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseDto } from '../models/entities/response.dto';
import { Observable } from 'rxjs';
import { DoTopUpDto } from '../models/dtos/do-top-up.dto';
import { DoWithdrawalsDto } from '../models/dtos/do-withdrawals.dto';
import { environment } from '../../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  // getFundAll() {
  //   return this.http.get('http://localhost:8080/fund/all');
  // }

  getFunds(phone: string): Observable<ResponseDto<number>> {
    return this.http.get<ResponseDto<number>>(environment.apiUrl + 'accounts/get-account-funds?phone='+phone);
  }


  // getSatoshis(code: string): Observable<ResponseDto<number>> {
  //   return this.http.get<ResponseDto<number>>('http://localhost:8080/recharge/get-code-sts?code='+code);
  // }

  getSatoshis(code: string): Observable<ResponseDto<number>> {
    return this.http.get<ResponseDto<number>>(environment.apiUrl + 'recharge/get-code-sts?code='+code);
  }

  // doTopUp(topUpData: DoTopUpDto): Observable<ResponseDto<any>> {
  //   return this.http.post<ResponseDto<undefined>>('http://localhost:8080/recharge/do-top', topUpData);
  // }

  doTopUp(topUpData: DoTopUpDto): Observable<ResponseDto<any>> {
    return this.http.post<ResponseDto<undefined>>(environment.apiUrl + 'recharge/do-top-up', topUpData);
  }

  doWithdrawal(topUpData: DoWithdrawalsDto): Observable<ResponseDto<any>> {
    return this.http.post<ResponseDto<undefined>>(environment.apiUrl + 'withdrawals/do-withdrawal', topUpData);
  }

}
