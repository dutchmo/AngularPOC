import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableComponent } from './components/table.component';
import {CrudService} from './services/Crud.service';
import {Checkbox, CheckboxModule, ConfirmDialogModule, DialogModule, DropdownModule, MessagesModule} from 'primeng';
import {ReactiveFormsModule} from '@angular/forms';
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [
    TableComponent,
    DateFormatPipe
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
        MessagesModule,
        DialogModule
    ],
  providers: [CrudService],
  bootstrap: [TableComponent]
})
export class AppModule { }
