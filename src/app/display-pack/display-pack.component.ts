import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Pack } from '../pack';
import { PackService } from '../pack.service';

@Component({
  selector: 'app-display-pack',
  templateUrl: './display-pack.component.html',
  styleUrls: ['./display-pack.component.css']
})
export class DisplayPackComponent implements OnInit {
packs:any;
id_pack:number;

  constructor(private Service:PackService,private router:Router) { }
    // ngOnInit() {
    //   this.getpacks()
    // }

   public getpacks(): void {
     this.Service.getPacks().subscribe(
       (response: Pack[]) => {
         this.packs = response;
         console.log(this.packs);
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
     );
     }
  public findPackById(){
    let resp= this.Service.getPackById(this.id_pack);
    resp.subscribe(data=>this.packs=data);
    
   }

  public deletepack(id:number){
    let resp= this.Service.deletePack(id);
    resp.subscribe((data)=>this.packs=data);
    // this.navigationSubscription = this.router.events.subscribe((q: any) => {
    //   // If it is a NavigationEnd event re-initalise the component
    //   if (q instanceof NavigationEnd) {
    //     this.ngOnInit();
    //   }
    // });
   }
      ngOnInit():void{
       let resp=this.Service.getPacks();
       resp.subscribe((data)=>this.packs=data );
      }
   
  
}
