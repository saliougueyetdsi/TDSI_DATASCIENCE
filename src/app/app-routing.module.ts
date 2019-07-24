import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CorrelationComponent } from './correlation/correlation.component';
import { DescriptionComponent } from './description/description.component';
import { AcpComponent } from './acp/acp.component';
import { RegressionLineaireComponent } from './regression-lineaire/regression-lineaire.component';
import { HistogrammeComponent } from './histogramme/histogramme.component';
import { HistogrammeByVariableComponent } from './histogramme-by-variable/histogramme-by-variable.component';
import { AfcComponent } from './afc/afc.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'correlation', component: CorrelationComponent},
  {path : 'description', component: DescriptionComponent},
  {path : 'acp', component:  AcpComponent},
  {path : 'afc', component:  AfcComponent},
  {path : 'regression_lineaire', component: RegressionLineaireComponent },
  {path : 'histogramme', component: HistogrammeComponent  },
  {path : 'histogramme-by-variable', component: HistogrammeByVariableComponent  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
