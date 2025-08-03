import { Component, Input, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from '../charts/bar/bar-chart.component';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,
    BarChartComponent ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent  {

  myData: ChartData<'bar'> = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [{ data: [1000, 2000, 1500], label: 'Sales' }]
};




}
