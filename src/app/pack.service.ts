import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Pack } from './pack';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PackService {
  pack:Pack;
  id_pack:number;
private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public getPacks(): Observable<any>{
    return this.http.get<Pack[]>(`${this.apiServerUrl}/all`);
  }
 
   public ajouterpack(pack:Pack): Observable<Pack>{
    return this.http.post<Pack>(`${this.apiServerUrl}/ajouterPack`, pack);
   }
  public updatePack(pack:Pack): Observable<Pack>{
    return this.http.put<Pack>(`${this.apiServerUrl}/update`, pack);
  }
 
  public deletePack( packId:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/supprimerPack/${packId}` );
  }
 
  
 
  public getPackById(id_pack){
    return this.http.get<Pack>(`${this.apiServerUrl}/al/`+id_pack);
  }
  
  public rappel(pack:Pack){
    return this.http.post(`${this.apiServerUrl}/Rappel`,pack)
  }
  
  // getNombreCVAll(): Observable<any> {
  //   return this.http.get<any>(`${this.apiServerUrl}` + `/getAllNombreCV`);
  // }
  getNombreCVValide(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}` + `/nombreCvValide`);
  }

  getNombreCVAll(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}` + `getAllNombreCV`);
  }
}
