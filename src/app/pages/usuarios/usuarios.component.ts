import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: `app-usuarios` ,
  templateUrl:  `./usuarios.component.html`,
  styleUrls: [`./usuarios.component.css`]
})
export class UsuariosComponent implements OnInit {

  
  graficos: any = {
    'grafico1': {
      'labels': ['CDMX', 'Monterrey', 'Guadalajara'],
      'data':  [2.5,8.2,20.5],
      'type': 'pie',
      'leyenda': 'SALARIOS ACTIVOS'
    }
  };

  constructor() { }

  ngOnInit() {
   
  }

}
