import { Component, OnInit } from '@angular/core';
import { Calculator } from '../calculator.model';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.css']
})
export class SimpleCalculatorComponent implements OnInit, Calculator {
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
