import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'map-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

  @Input() public ChartLabels: string[] = [];
  @Input() public ChartData: number[] = [];
  @Input() public ChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
