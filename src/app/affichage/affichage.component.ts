import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardService } from '../card/card.service';
import { Pack } from '../pack';
import { PackService } from '../pack.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

  public packs: Pack[];
  public editEmployee: Pack;
  public deleteEmployee: Pack;
  public id:number;
  test:Pack;
pack:any
  constructor(private packService: PackService,private http: HttpClient,private cardService:CardService){}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.packService.getPacks().subscribe(
      (response: Pack[]) => {
        this.packs = response;
        console.log(this.packs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onUpdateEmloyee(employee: Pack): void {
    this.packService.updatePack(employee).subscribe(
      (response: Pack) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  

  public onDeleteEmloyee(packId: number): void {
    this.packService.deletePack(packId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getpack(id:number){
    this.cardService.getpack(this.id).subscribe((data:Pack)=>{this.test=data
      console.log(this.test)} )
    
    ;
    
   }
  


     public searchEmployees(key: string): void {
      console.log(key);
      const results: Pack[] = [];
      for (const pack of this.packs) {
        if (pack.mail && pack.mail.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || pack.type_pack && pack.type_pack.toLowerCase().indexOf(key.toLowerCase()) !== -1
        ) {
          results.push(pack);
        }
      }
      this.packs = results;
      if (results.length === 0 || !key) {
        this.getEmployees();
      }
    }
  public onOpenModal(pack:Pack, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
     if (mode === 'add') {
       button.setAttribute('data-target', '#addEmployeeModal');
     }
    if (mode === 'edit') {
      this.editEmployee = pack;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteEmployee = pack;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }



}


