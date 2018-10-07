import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  science_flag: boolean;
  result: string;
  constructor() {
    this.science_flag = false;
    this.result = '0';
  }
  printScreen(str: string) {
    if (this.result === '0') {this.result = str; }
    else {
    this.result = this.result + str; }
  }
  toggleVisibility() {
    this.science_flag = !this.science_flag;
  }
}
