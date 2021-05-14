// import { Component, OnInit } from '@angular/core';
// import { NavigationEnd } from '@angular/router';
// import { Router } from '@angular/router';
// import { ChartDataSets } from 'chart.js';
// import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
// import { PackService } from '../pack.service';

// @Component({
//   selector: 'app-statistique',
//   templateUrl: './statistique.component.html',
//   styleUrls: ['./statistique.component.css']
// })
// export class StatistiqueComponent implements OnInit {
  

//   navigationSubscription
//   public type: ChartType = 'line';
//   public doughnutChartLabels = [];
//   public doughnutChartData = [];
//   public doughnutChartDataCV = [];
//   public doughnutChartType = 'doughnut';

//   public datasets: ChartDataSets[] = []


//   public datasetOffre: ChartDataSets[] = []
//   public datasetCV: ChartDataSets[] = []



//   public options: ChartOptions = {
//     legend: {
//       display: false
//     }
//   };
//   showPieCVs: boolean = false;
//   showPieOffre: boolean = false;

//   allCount = []
//   allCountCv = []
//   OffreValide= [];

//   constructor(private packService:PackService, private router: Router) {
//     this.navigationSubscription = this.router.events.subscribe((e: any) => {
//       // If it is a NavigationEnd event re-initalise the component
//       if (e instanceof NavigationEnd) {
//         this.ngOnInit();
//       }
//     });
//   }

//   ngOnInit() {
    
//     this.packService.getNombreCVAll().subscribe((data) => {
//       this.allCountCv = data

//     }, (err) => {
//     })
//     this.pieCV()



//   }


  
//   pieCV() {

//     this.doughnutChartLabels = ['Valide','Archivé']

//     this.cvService.getNombreCVValide().subscribe((data)=>{
//       this.doughnutChartDataCV=data
//     },(err)=>{})

//     this.datasetCV = [{
//       data: this.doughnutChartDataCV,
//       backgroundColor: [
//         'rgba(57,255,43,0.99)',
//         'rgb(169,169,169)',
//       ],
//       borderColor: [
//         'rgb(57,255,43)',
//         'rgb(169,169,169)',
//       ],
//       borderWidth: 1
//     }];




//   }
 
// }