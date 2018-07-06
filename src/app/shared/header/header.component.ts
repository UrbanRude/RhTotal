import { Component, OnInit } from '@angular/core';

@Component({
  selector: `app-header`,
  templateUrl: `./header.component.html`,
  styleUrls: [ `./header.component.css` ]
})
export class HeaderComponent implements OnInit {

  menuToolbar:any = [
    { titulo: 'USUARIOS', url:'/usuarios' },
    { titulo: 'ANTICIPO DE NÓMINA', url:'/anticipo' },
    { titulo: 'DESCUENTOS', url:'/descuentos' },
    { titulo: 'SEGUROS', url:'/seguros' },
    { titulo: 'CONTENT', url:'/content' },
    { titulo: 'ROLES', url:'/roles' },
    { titulo: 'CLIENTE', url:'/clientes' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
