import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { IDataSets } from 'src/app/shared/models/common.model';
import { ECharts } from 'src/app/shared/enums/common.enum';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BarChartComponent implements OnInit {
  @Input() data!: ChartData<ECharts.BAR>;
  loading: boolean = false;
  chartType: ChartType = ECharts.BAR;
  dataSource: IDataSets[] = [];
  // chart options
  options: ChartOptions<ECharts.BAR> = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  constructor() { }
  ngOnInit(): void { }

}
