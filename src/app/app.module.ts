// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { ScienceCalculatorComponent } from './science-calculator/science-calculator.component';
// services
import { CalculatorService } from './calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    SimpleCalculatorComponent,
    ScienceCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
