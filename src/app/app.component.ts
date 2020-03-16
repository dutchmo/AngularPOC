import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Crudservice, Todo} from './services/Crudservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [Crudservice] inject local service
})
export class AppComponent implements OnInit {

  constructor(private crudService: Crudservice) {
  }

  ngOnInit(): void {
    //console.log(this.crudService.showTasks())
  }

  // https://www.cloudhadoop.com/2018/08/primeng-angular-datatable-tutorial-with.html
  cols = [
    { field: 'id', header: 'ID' },
    { field: 'userId', header: 'User ID' },
    { field: 'title', header: 'Title' }
  ];

  selectedValues: string[] = [];

  title = 'AngularPOC';

  value = 1;
  message: string;

  allTodos: Todo[]

  even = false

  totalRecords = 0

  // get input from another component
  @Input() inputVar: number

  // send output to another component
  @Output() outputVar = new EventEmitter()

  updateOutputVar() {
    this.outputVar.emit("sending event")
  }

  increment() {

    if (this.value%2 == 0) {
      this.even = true
    } else {
      this.even = false
    }

    this.crudService.getAllTodos().subscribe(todos => {this.allTodos = todos.slice(1,20); this.totalRecords = this.allTodos.length; console.log("setting on component") })

    this.crudService.getTodo(this.value)

    if (this.value < 15) {
      this.value += 1;
      this.message = '';
    } else {
      this.message = 'Maximum reached!';
    }
  }

  decrement() {
    if (this.value > 1) {
      this.value -= 1;
      this.message = '';
    } else {
      this.message = 'Minimum reached!';
    }
  }
  paginate(event) {
    console.log(event)
  }
}

