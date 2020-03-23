import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {CrudService, Todo, nameof} from '../services/Crud.service';
import {ConfirmationService, MessageService, SelectItem} from 'primeng';

@Component({
  selector: 'app-root',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [MessageService, ConfirmationService]
})


export class TableComponent implements OnInit {

  constructor(private crudService: CrudService, formBuilder: FormBuilder,  private messageService: MessageService) {
    this.myForm = formBuilder.group({
      'sku': ['ABC123', Validators.required]
    });

  }


  //private confirmationService: ConfirmationService,
  ngOnInit(): void {
    this.setupForm();
    this.loading = true;
  }

  // https://www.cloudhadoop.com/2018/08/primeng-angular-datatable-tutorial-with.html

  cols = [
    {field: nameof('id'), header: 'ID', width: 10},
    {field: nameof('userId'), header: 'User ID', width: 10},
    {field: nameof('title'), header: 'Title', width: 10},
    {field: nameof('created_date'), header: 'Created', width: 10}
  ];

  selectedValues: string[] = [];

  title = 'AngularPOC';
  displayConfirmDialog = false;
  myForm: FormGroup;
  profileForm: FormGroup;
  loading: boolean;
  userIds: SelectItem[] = [
    {label: 'Select..', value: ''},
    {label: 'One', value: '1'},
    {label: 'Two', value: 2},
    {label: 'Three', value: 3},
  ];
  //userIds.unshift(99999)
  value = 1;
  message: string;

  allTodos: Todo[];


  selectedTodos: Todo[];

  even = false;

  totalRecords = 999;

  // get input from another component
  @Input() inputVar: number;

  // send output to another component
  @Output() outputVar = new EventEmitter();

  updateOutputVar() {
    this.outputVar.emit('sending event');
  }

  increment() {

    const myTodo: Todo = {
      id: 'Testid',
      userId: 'TestUser',
      title: ' My Title'
    };
    this.crudService.createTodo(myTodo);


    if (this.value % 2 == 0) {
      this.even = true;
    } else {
      this.even = false;
    }

    this.crudService.getAllTodos().subscribe(todos => {
      this.allTodos = todos.slice(1, 40);
      this.totalRecords = 40;
    });

    this.crudService.getTodo(this.value);

    if (this.value < 15) {
      this.value += 1;
      this.message = '';
    } else {
      this.message = 'Maximum reached!';
    }

    this.loading = false;
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
    console.log(event);
  }

  setupForm() {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }


  onSubmit() {
    console.log('On submit ' + this.profileForm.value.firstName);
  }

  onSubmit2(formvalue) {
    console.log('On submit ' + formvalue.sku);
  }

  showConfirm(){
    this.displayConfirmDialog = true
  }

  confirmAction() {
        console.log(this.selectedTodos);
        console.log('confirmed accept');
    this.displayConfirmDialog = false
  }

  rejectAction() {
    this.messageService.add({severity: 'info', summary: 'Info Message', detail: 'Rejected'});
    this.displayConfirmDialog = false;
  }

  clearMessages() {
    this.messageService.clear();
  }
}

