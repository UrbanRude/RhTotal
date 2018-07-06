import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html'
})
export class GraficaDonaComponent implements OnInit {

  @Input() chartLabels:string[] = [];
  @Input() chartData:number[] = [];
  @Input() chartType:string = '';
    
  constructor() { }

  ngOnInit() {
  }

}
