import { Component, OnInit } from '@angular/core';
import { Calculator } from '../calculator.model';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-science-calculator',
  templateUrl: './science-calculator.component.html',
  styleUrls: ['./science-calculator.component.scss']
})
export class ScienceCalculatorComponent implements OnInit, Calculator {
  result: string;
  constructor(private _calcService: CalculatorService) {
    this.result = '0';
  }
  printScreen(str: string): any {
    if (this.result === '0' && str !== '.') {this.result = str; }
    else {
    this.result = this.result + str; }
  }
  registerAction(opt: string): any {
    // parse result to number to use in the addResult()
    const result: number = +this.result;
    // call the _calcService.addResult()
    this._calcService.addResult(result);
    // call the _calcService.addOpt()
    this._calcService.addOpt(opt);
    // clear the display
    this.result = '0';
  }
  calculate(): any {
    const result = +this.result;
    console.log(`last result is: ${result}`);
    this._calcService.resultHistory.subscribe({
      next: (v) => {
        this.result = String(this._calcService.calculate(v, result));
      }
    });
  }
  clean(): any {
    // add 0 to the result Subject
    this._calcService.addResult(0);
    // add '' to the opt Subject
    this._calcService.addOpt('');
    // clean the display
    this.result = '0';
  }
  ngOnInit() {
  }

}
