import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartType, ChartData, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule,
     NgChartsModule,
   ],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {

@Input() chartType: ChartType ='pie';
@Input() chartData?: ChartData;



  /** 
  chartType: ChartType = 'bar';
  chartData:ChartData<'bar'>=
  {
    labels:['Jan', 'Feb', 'Mar'],
    datasets:[
      { data: [1000, 4500, 1500], label: 'Sales' },
      { data: [800, 1600, 2400], label: 'Revenue' }
    ]
  }
*/
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins :{
      legend:{
        display:true,

      }
      
    }
    
  };  

}
