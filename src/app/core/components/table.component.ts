import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {ConfirmationService, MessageService, SelectItem} from 'primeng';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {CrudTestService, nameof, Todo} from '../services/crud-test.service';
import {Address} from '../models/address.model';

@Component({
  selector: 'list-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [MessageService, ConfirmationService]
})


export class TableComponent implements OnInit {

  constructor(private crudService: CrudTestService, formBuilder: FormBuilder, private messageService: MessageService) {
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
  addressForm: FormGroup;
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
  originalAddress = null;


  // get input from another component
  @Input() inputVar: number;

  // send output to another component
  @Output() outputVar = new EventEmitter();

  formListener = null;
  zipListener = null;

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
    this.addressForm = new FormGroup({
      addressLine1: new FormControl(''),
      addressLine2: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    });

    this.originalAddress = new Address('111 Cadoz', '', 'Austin', 'TX', '78750');
    this.addressForm.patchValue({city: 'Kalamazoo'});
    this.addressForm.setValue(this.originalAddress);
    //     distinctUntilChanged((p: Person, q: Person) => p.name === q.name),
    this.formListener = this.addressForm.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(50)
      )
      .subscribe(
        addr => {
          //console.log((addr as IAddress).addressLine1)
          //console.log(Object.prototype.toString.call(addr))

          // for (let [key, value] of this.originalAddress) {
          //   console.log(key, value);
          // }
          const skipme = 'zip';
          for (const key in this.originalAddress) {
            const origval = this.originalAddress[key];
            const newval = addr[key];
            if ((origval !== newval) && key != skipme) {
              const msg = `${key}: ${origval} => ${newval}`;
              console.log(msg);
            }

          }

        });

    this.zipListener = this.addressForm.get('zip').valueChanges.subscribe(
      x => console.log('zip changed ' + x)
    );

  }


  onSubmit() {
    console.log('On submit ' + this.addressForm.value.city);
  }

  onSubmit2(formvalue) {
    console.log('On submit ' + formvalue.sku);
  }

  showConfirm() {
    this.displayConfirmDialog = true;
  }

  confirmAction() {
    console.log(this.selectedTodos);
    console.log('confirmed accept');
    this.displayConfirmDialog = false;
  }

  rejectAction() {
    this.messageService.add({severity: 'info', summary: 'Info Message', detail: 'Rejected'});
    this.displayConfirmDialog = false;
  }

  clearMessages() {
    this.messageService.clear();
  }
}

