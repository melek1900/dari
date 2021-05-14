import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {Router,NavigationEnd} from "@angular/router";
import { PackService } from '../pack.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})

export class StatistiqueComponent implements OnInit {
  
  navigationSubscription
  public type: ChartType = 'line';
  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartDataCV = [];
  public doughnutChartType = 'doughnut';

  public datasets: ChartDataSets[] = []


  public datasetOffre: ChartDataSets[] = []
  public datasetCV: ChartDataSets[] = []

 

   public options: ChartOptions = {
    legend: {
       display: false
     }
   };
  showPieCVs: boolean = false;
  showPieOffre: boolean = false;

  allCount = []
  allCountCv = []
  OffreValide= [];
  constructor(private packService:PackService, private router: Router,) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    
    this.packService.getNombreCVAll().subscribe((data) => {
      this.allCountCv = data

    }, (err) => {
    })
    this.pieCV()



  }
  pieCV() {

    this.doughnutChartLabels = ['Bronze','Silver','Gold']

    this.packService.getNombreCVValide().subscribe((data)=>{
      this.doughnutChartDataCV=data
    },(err)=>{})

    this.datasetCV = [{
      data: this.doughnutChartDataCV,
      backgroundColor: [
        'rgba(57,255,43,0.99)',
        'rgb(169,169,169)',
        'rgb(0,0,255)',
      ],
      borderColor: [
        'rgb(57,255,43)',
        'rgb(169,169,169)',
        'rgb(0,0,255)',
      ],
      borderWidth: 1
    }];
}
}