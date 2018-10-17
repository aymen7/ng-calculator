import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { ScienceCalculatorComponent } from './science-calculator/science-calculator.component';

const routes: Routes = [
    {path: '', redirectTo: 'simple', pathMatch: 'full'},
    {path: 'simple', component: SimpleCalculatorComponent},
    {path: 'scientific', component: ScienceCalculatorComponent}
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
