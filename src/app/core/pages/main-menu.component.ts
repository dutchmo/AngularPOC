import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

   items: MenuItem[];
   public items2: MenuItem[];

  constructor() { }

  ngOnInit(): void {

    this.items = [{
      label: 'File',
      items: [
        {label: 'View Addresses', icon: 'pi pi-plus', routerLink: ['/address-view'], queryParams: {'myparam': 'true'}},
        {label: 'PrimeNG', icon: 'pi pi-plus', url: 'http://www.primefaces.org/primeng'},
        {label: 'Edit Address', icon: 'pi pi-download', routerLink: ['/address/3']},

        {label: 'Run Command', icon: 'pi pi-plus', command: (event) => {
          console.log("menu")
            //event.originalEvent: Browser event
            //event.item: menuitem metadata
          }}
      ]
    }
    ]

  }

}
