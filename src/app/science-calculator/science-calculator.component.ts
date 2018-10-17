import { Component, OnInit } from '@angular/core';
import { Calculator } from '../calculator.model';

@Component({
  selector: 'app-science-calculator',
  templateUrl: './science-calculator.component.html',
  styleUrls: ['./science-calculator.component.scss']
})
export class ScienceCalculatorComponent implements OnInit, Calculator {
  result: string;
  constructor() {
    this.result = '0';
  }
  printScreen(str: string): any {
    if (this.result === '0') {this.result = str; }
    else {
    this.result = this.result + str; }
  }
  ngOnInit() {
  }

}
