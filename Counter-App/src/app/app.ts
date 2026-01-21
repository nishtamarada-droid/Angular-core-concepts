import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  count = 0;

  // We can Do it By 2 approaches
  // Approach 1:

  increment() {
    this.count = this.count + 1;
  }
  decrement() {
    this.count = this.count - 1;
  }
  reset() {
    this.count = this.count = 0;
  }


  // Approach 2: (Recommended) Just One Function to Handle All


  handlecount(value: string) {
    if (value == 'minus') {
      this.count = this.count - 1 >= 0 ? this.count - 1 : 0;
    }
    else if (value == 'plus') {
      this.count = this.count + 1;

    }
    else {
      this.count = 0;
    }


  }
}


