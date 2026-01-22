import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
email="";
name =""
displayname ="";
getName(event : Event){
  this.name = (event.target as HTMLInputElement).value;
}
displayName(){
  this.displayname = this.name;
}
SetName(){
  this.name="Ahmad "
}
// We will use ngModel to bind the input field value to the email property

getEmail() {
  console.log(this.email);
}

setEmail() {
  this.email = 'ahmad@email.com';
}



}