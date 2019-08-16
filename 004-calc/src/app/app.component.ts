import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator';

  numpad = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', '.', 0, '%', '/'];

  inputs = '';
  result = 0;

  addInput(item: string | number) {
    this.inputs += item;
  }

  evalInputs() {
    // tslint:disable-next-line: no-eval
    this.result = eval(this.inputs);
  }

  reset() {
    this.inputs = '';
    this.result = 0;
  }
}
