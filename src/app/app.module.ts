import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddressViewComponent } from './core/components/address-view.component';
import {Checkbox, CheckboxModule, ConfirmDialogModule, DialogModule, DropdownModule, MenuModule, MessagesModule} from 'primeng';
import {ReactiveFormsModule} from '@angular/forms';
import { DateFormatPipe } from './core/pipes/date-format.pipe';
import { AddressCreateComponent } from './address-maint/pages/address-create/address-create.component';
import { MainMenuComponent } from './core/pages/main-menu.component';
import {RouterModule, Routes} from '@angular/router';
import {CrudTestService} from './core/services/crud-test.service';
import {CoreRoutingModule} from './app.routing';


@NgModule({
  declarations: [
    AddressViewComponent,
    DateFormatPipe,
    AddressCreateComponent,
    MainMenuComponent
  ],
  imports: [
    CoreRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    CheckboxModule,
    ReactiveFormsModule,
    DropdownModule,
    ConfirmDialogModule,
    MessagesModule,
    DialogModule,
    MenuModule
  ],
  providers: [CrudTestService],
  bootstrap: [MainMenuComponent]
})
export class AppModule { }
