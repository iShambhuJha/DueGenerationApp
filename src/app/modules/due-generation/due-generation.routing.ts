import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsComponent } from './due-generation/results/results.component';
import { FrequencyComponent } from './due-generation/frequency/frequency.component';
import { WeeklyOffComponent } from './due-generation/weekly-off/weekly-off.component';
import { StartEndDateComponent } from './due-generation/start-end-date/start-end-date.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start-end-date',
    pathMatch: 'full'
  },
  {
    path: 'start-end-date',
    component: StartEndDateComponent
  },
  {
    path: 'weekly-off',
    component: WeeklyOffComponent
  },
  {
    path: 'frequency',
    component: FrequencyComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DueGenerationRoutingModule {  }
