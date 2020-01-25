import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StartEndDateComponent } from './due-generation/start-end-date/start-end-date.component';
import { WeeklyOffComponent } from './due-generation/weekly-off/weekly-off.component';
import { FrequencyComponent } from './due-generation/frequency/frequency.component';
import { ResultsComponent } from './due-generation/results/results.component';
import { DueGenerationRoutingModule } from './due-generation.routing';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';


@NgModule({
  declarations: [StartEndDateComponent, WeeklyOffComponent, FrequencyComponent, ResultsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DueGenerationRoutingModule,
    InputsModule,
    DateInputsModule
  ]
})
export class DueGenerationModule { }
