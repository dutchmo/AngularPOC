import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CrudTestService, nameof, Todo} from '../../../core/services/crud-test.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ConfirmationService, InputTextModule, MessageService, SelectItem} from 'primeng';
import {Address} from '../../../core/models/address.model';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class AddressCreateComponent implements OnInit {

  constructor(private crudService: CrudTestService, formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'sku': ['ABC123', Validators.required]
    });
  }

  ngOnInit(): void {
    console.debug("table starting ")
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



  // get input from another component
  @Input() inputVar: number;

  // send output to another component
  @Output() outputVar = new EventEmitter();

  formListener = null;
  zipListener = null;
  originalAddress: Address;

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


  }


  paginate(event) {
    console.log(event);
  }

  get fc() {
    return this.addressForm.controls;
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
    console.log('confirmed accept');
    this.displayConfirmDialog = false;
  }

/*  rejectAction() {
    this.messageService.add({severity: 'info', summary: 'Info Message', detail: 'Rejected'});
    this.displayConfirmDialog = false;
  }

  clearMessages() {
    this.messageService.clear();
  }
  */
}

