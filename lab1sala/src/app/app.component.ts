import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab1sala';

  message: string;

  counter: number;
  interval: any;

  constructor() {


    this.message = "String interpolation is useful";
    this.counter = 0;
    this.interval = setInterval(() => {
      this.counter++;

    }, 1000);

    setTimeout(() => {
      clearInterval(this.interval);
    }, 20000);
  }
}
