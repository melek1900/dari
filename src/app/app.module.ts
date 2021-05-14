import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PackService } from './pack.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PackComponent } from './pack/pack.component';
import { Router, RouterModule, Routes } from '@angular/router';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayPackComponent } from './display-pack/display-pack.component';
import { AffichageComponent } from './affichage/affichage.component';
import { ContentComponent } from './content/content.component';
// import { StatistiqueComponent } from './statistique/statistique.component';
import { ChartsModule } from 'ng2-charts';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
// import { MapComponent } from './map/map.component';

const appRoutes : Routes= [
  {path:'',redirectTo:'accueil',pathMatch:'full'},
   {path:'accueil',component:HomeComponent},
  {path:'subscription',component:PackComponent},
  {path: 'card-example',component: CardComponent},
 {path:"search",component:DisplayPackComponent},
 {path:"affichage",component:AffichageComponent},
//  {path:"stat",component:StatistiqueComponent},
  {path:'user',component:UserComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    PackComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CardComponent,
    DisplayPackComponent,
    AffichageComponent,
    ContentComponent,
    // StatistiqueComponent,
    UserComponent,
    // MapComponent,
 ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CommonModule ,
    AppRoutingModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [PackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
