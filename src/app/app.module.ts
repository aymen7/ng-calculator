import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { ScienceCalculatorComponent } from './science-calculator/science-calculator.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
