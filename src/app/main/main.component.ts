import { Component, Input, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartType, ChartData, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,
    NgChartsModule ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent  {

 // @Input() config:any;

  myChartConfig = {
    chartType: 'line',
    chartData: {
      labels: ['Week 1', 'Week 2', 'Week 3'],
      datasets: [
        { data: [50, 75, 100], label: 'Users' }
      ]
    }
  };

/** 
  chartType:ChartType ='bar';
  chartData: ChartData<'bar'>={
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{ data: [100, 200, 150], label: 'Sales' }]
  }
    chartOptions: ChartOptions = {
    responsive: true
  };



  constructor(){
    this.ngOnInit()
  }
  
  ngOnInit() {
    this.chartType = this.config.chartType;
    this.chartData = this.config.chartData;
  }
*/

}
