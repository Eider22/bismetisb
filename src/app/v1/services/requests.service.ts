import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseDto } from '../models/entities/response.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  getFundAll() {
    return this.http.get('http://localhost:8080/fund/all');
  }


  getSatoshis(code: string): Observable<ResponseDto<number>> {
    return this.http.get<ResponseDto<number>>('http://localhost:8080/recharge/get-code-sts?code='+code);
  }
}
