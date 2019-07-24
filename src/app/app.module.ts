import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule  } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { NgForm , FormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataframeService } from './dataframe.service';
import { CorrelationComponent } from './correlation/correlation.component';
import { DescriptionComponent } from './description/description.component';
import { AcpComponent } from './acp/acp.component';
import { RegressionLineaireComponent } from './regression-lineaire/regression-lineaire.component';
import { HistogrammeComponent } from './histogramme/histogramme.component';
import { HistogrammeByVariableComponent } from './histogramme-by-variable/histogramme-by-variable.component';
import { AfcComponent } from './afc/afc.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    NavbarComponent,
    CorrelationComponent,
    DescriptionComponent,
    AcpComponent,
    RegressionLineaireComponent,
    HistogrammeComponent,
    HistogrammeByVariableComponent,
    AfcComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule

  ],
  providers: [DataframeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
