import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  // basic signal
  count = signal(10);

  // another signal
  step = signal(1);

  // computed signal (derived value)
  doubleCount = computed(() => this.count() * 2);

  constructor() {
    // runs whenever count changes
    effect(() => {
      console.log('Count changed:', this.count());
    });

    // effect using multiple signals
    effect(() => {
      console.log('Double Count:', this.doubleCount());
    });
  }

  increment() {
    this.count.update(value => value + this.step());
  }

  decrement() {
    this.count.update(value => value - this.step());
  }

  reset() {
    this.count.set(0);
  }

  increaseStep() {
    this.step.update(v => v + 1);
  }
}
