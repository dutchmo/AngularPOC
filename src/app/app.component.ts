import {Component, OnInit} from '@angular/core';
import {Crudservice} from './services/Crudservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private crudService: Crudservice) {
  }

  ngOnInit(): void {
    console.log(this.crudService.showTasks())
  }

  title = 'AngularPOC';

  value = 0;
  message: string;

  increment() {
    console.log(this.crudService.showTasks())

    if (this.value < 15) {
      this.value += 1;
      this.message = '';
    } else {
      this.message = 'Maximum reached!';
    }
  }
  decrement() {
    if (this.value > 0) {
      this.value -= 1;
      this.message = '';
    } else {
      this.message = 'Minimum reached!';
    }
  }
}
