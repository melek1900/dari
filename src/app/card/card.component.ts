import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pack } from '../pack';
import { PackService } from '../pack.service';
import { StripeService } from '../stripe.service';
import { CardService } from './card.service';
declare var Stripe: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  private stripe: any = null;
  private card: any = null;
  private elements: any = null;
  public cardError: string = null;
  public chargeError: any = null;
  public charge: any = null;
  private apiServerUrl=environment.apiBaseUrl;
  test:Pack;
  id: any;
  packs:any;
  pack:Pack[];
mail:any;
  constructor(
    private http:HttpClient,
    private readonly stripeService: StripeService,
    private readonly cardService: CardService,
    private packService:PackService
    ) { }

  public ngOnInit() {
    this.stripeService.initializeStripe().subscribe(() => {
      this.stripe = Stripe(environment.stripePublicKey);
      this.elements = this.stripe.elements();
      this.card = this.elements.create('card');
      this.card.mount('#card-element');
      this.card.addEventListener('change',
        event => event.error ? this.cardError = event.error.message : null);
    });
  }

  /**
   * Submits the Stripe token to the backend and creates a charge
   * @param token The Stripe.js token
   */
  public createCharge(token) {
    this.charge = null;
    this.chargeError = null;
    this.cardService.createCharge(token, 999, 'usd', 'This is a sample charge')
    .subscribe(
      response => this.charge = response,
      error => this.chargeError = error
    );
  }

  /**
   * Gets a Stripe token from the Stripe.js API
   */
  public getToken() {
    this.stripe.createToken(this.card).then(result => {
      if (result.error) {
        this.cardError = result.error.message;
      } else {
        this.createCharge(result.token);
      }
    });
  }
  exportPdf(){
    this.cardService.exportpdf().subscribe(x =>{
      const blob=new Blob([x],{type:'application/pdf'});
    if(window.navigator && window.navigator.msSaveOrOpenBlob){
      window.navigator.msSaveOrOpenBlob(blob);
      return;
    }
  
    const data=window.URL.createObjectURL(blob);
    const link=document.createElement('a');
    link.href=data;
    link.download='pack.pdf';
    link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
    setTimeout(function(){
      window.URL.revokeObjectURL(data);
      link.remove();
    },100);
    });
  }
  public getpaack(mail:String){
    this.cardService.getpaack(this.mail).subscribe((data:Pack)=>{this.test=data
      console.log(this.test)} )
    
    ;
    
   }
   public deletepack(id:number){
    let resp= this.packService.deletePack(id);
    resp.subscribe((data)=>this.packs=data);
   }
   public dorappel(pack:Pack){
    let resp= this.packService.rappel(this.test);
    resp.subscribe()
  
  }
  
}
