import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  
  display = true;
  togglee = true;

  
  color = 1;
  switchColor = 1;


  show() {
    this.display = true;
  }

  hide() {
    this.display = false;
  }

  toggle1() {
    this.display = !this.display;
  }

  toggle2() {
    this.togglee = !this.togglee;
  }

 
  manageColor(val: number) {
    this.color = val;
  }

 
  setSwitchColor(val: number) {
    this.switchColor = val;
  }
}
