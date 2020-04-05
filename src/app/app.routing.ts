import {RouterModule, Routes} from '@angular/router';
import {AddressViewComponent} from './core/components/address-view.component';
import {AddressCreateComponent} from './address-maint/pages/address-create/address-create.component';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {ModuleWithProviders, NgModule} from '@angular/core';

const appRoutes: Routes = [
  { path: 'address-view', component: AddressViewComponent },
  { path: 'address/:id',      component: AddressCreateComponent },
  {
    path: 'addresses',
    component: AddressViewComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: 'addresses',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
