import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableComponent } from './table.component';
import {CrudService} from './services/Crud.service';
import {Checkbox, CheckboxModule, ConfirmDialogModule, DropdownModule, MessagesModule} from 'primeng';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    CheckboxModule,
    ReactiveFormsModule,
    DropdownModule,
    ConfirmDialogModule,
    MessagesModule
  ],
  providers: [CrudService],
  bootstrap: [TableComponent]
})
export class AppModule { }
