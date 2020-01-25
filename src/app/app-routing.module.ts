import { MainComponent } from './layout/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children:[
      {
        path: '',
        redirectTo: 'due-generation',
        pathMatch: 'full'
      },
      {
        path: 'due-generation',
        loadChildren: './modules/due-generation/due-generation.module#DueGenerationModule',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
