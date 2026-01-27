import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  list = ['Ahmad', 'Ali', 'Usman', 'Huzaifa', 'Munawwar', 'Hassan', 'Hussain', 'Ammar', 'Asim', 'Uzair'];


  data = [
    { 'name': 'Ahamd', age: 19, 'email': 'ahmad@test.com' }
    , { 'name': 'Ali', age: 20, 'email': 'ali@test.com' }
    , { 'name': 'Usman', age: 21, 'email': 'usman@test.com' }
    , { 'name': 'Huzaifa', age: 22, 'email': 'huzaifa@test.com' }
    , { 'name': 'Munawwar', age: 23, 'email': 'munawwar@test.com' }
    , { 'name': 'Hassan', age: 24, 'email': 'hassan@test.com' }
    , { 'name': 'Hussain', age: 25, 'email': 'hussain@test.com' }
    , { 'name': 'Ammar', age: 26, 'email': 'ammar@test.com' }
    , { 'name': 'Asim', age: 27, 'email': 'asim@test.com' }
    , { 'name': 'Uzair', age: 28, 'email': 'uzair@test.com' }
  ]
  getid(age: number) {
    console.log(age);
  }
}
