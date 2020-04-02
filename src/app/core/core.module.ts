import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [NotFoundComponentComponent, NotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
