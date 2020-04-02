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
        {label: 'Recent Files', icon: 'pi pi-plus', routerLink: ['/address-view'], queryParams: {'recent': 'true'}},
        {label: 'New3', icon: 'pi pi-plus', url: 'http://www.primefaces.org/primeng'},
        {label: 'New3', icon: 'pi pi-plus', url: 'http://www.primefaces.org/primeng'},
        {label: 'Open', icon: 'pi pi-download', routerLink: ['/pagename']},
        {label: 'New2', icon: 'pi pi-plus', command: (event) => {
          console.log("menu")
            //event.originalEvent: Browser event
            //event.item: menuitem metadata
          }}
      ]
    }
    ]

    this.items2 = [{
      label: 'File',
      items: [
        {label: 'New', icon: 'pi pi-fw pi-plus'},
        {label: 'Download', icon: 'pi pi-fw pi-download'}
      ]
    },
      {
        label: 'Edit',
        items: [
          {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
          {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
        ]
      }];

  }

}
