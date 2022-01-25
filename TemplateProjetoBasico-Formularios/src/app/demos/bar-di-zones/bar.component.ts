import { Component, Inject, OnInit } from '@angular/core';
import { BarUndiadeConfig } from './bar.config';
import { BarServices } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    { provide: BarServices, useClass: BarServices }
  ]
})
export class BarComponent implements OnInit {

  ConfigManual: BarUndiadeConfig;

  constructor(
    private barServices: BarServices,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUndiadeConfig
  ) {
    this.ConfigManual = ApiConfigManual;
  }

  ngOnInit(): void { }

}
