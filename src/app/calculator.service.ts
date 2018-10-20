import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  resultHistory: BehaviorSubject<number>;
  optHistory: BehaviorSubject<string>;
  constructor() {
    this.resultHistory = new BehaviorSubject(0);
    this.optHistory = new BehaviorSubject('');
  }
  addResult(value: number): any {
    this.resultHistory.next(value);
  }
  addOpt(value: string): any {
    this.optHistory.next(value);
  }
  calculate(nbr1: number, nbr2: number): number {
    // using value we can get the last value of BehaviorSubject
    const opt: string = this.optHistory.getValue();
    switch (opt) {
      case '+':
        return nbr1 + nbr2;
      case '-':
        return nbr1 - nbr2;
      case '*':
        return nbr1 * nbr2;
      case '÷':
        return nbr1 / nbr2;
      case '%':
        return (nbr1 * nbr2) / 100;
      case 'a^b':
        return Math.pow(nbr1, nbr2);
        default:
          console.log('just a default message');
    }
  }
}
