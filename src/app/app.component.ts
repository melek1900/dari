import { Component, OnInit } from '@angular/core';
import { PackService } from './pack.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private packService:PackService) { }
  
  ngOnInit() {}


  
   
  
  
}
