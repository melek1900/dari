import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { PackService } from '../pack.service';
import { Pack } from '../pack';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private headers = new HttpHeaders();
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private httpClient: HttpClient,private http: HttpClient,private service:PackService) {
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }
 

  /**
   * Creates a charge from a Stripe.js token
   * @param cardToken Token provided by Stripe.js
   * @param price The price of the item(s) you are selling
   * @param currency The currency
   * @param description A description of the item(s)
   */
  public createCharge(cardToken, price, currency, description) {
    const chargeRequest = {
      token: cardToken.id,
      price,
      description,
      currency
    };
    return this.httpClient.post(`${this.apiServerUrl}/charges`, chargeRequest, { headers: this.headers });
  }
  exportpdf():Observable<Blob>{
    return this.http.get(`${this.apiServerUrl}/download-pdf`,{responseType:'blob'});
      }
      public getpack(id: string | number){
        return this.http.get<Pack>( "http://localhost:8081/al/"+id)
      }
      public getpaack(mail: string){
        return this.http.get<Pack>( "http://localhost:8081/al/"+mail)
      }
}
