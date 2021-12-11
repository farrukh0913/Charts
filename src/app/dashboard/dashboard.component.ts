import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartData } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { IDataSets, IDataSource } from 'src/app/shared/models/common.model';
import { ECharts } from 'src/app/shared/enums/common.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent implements OnInit {
  loading: boolean = false;
  openBarChart: boolean = false;
  openPieChart: boolean = false;
  dataSource: IDataSets[] = [];
  dataBar!: ChartData<ECharts.BAR>;
  dataPie!: ChartData<ECharts.PIE>;

  constructor(private httpService: HttpService, private toastrService: ToastrService, private cd: ChangeDetectorRef) { }
  ngOnInit(): void {
    //get data from api
    this.loadData();
  }

  //#region load data

  /**
   * load data from api
   */
  loadData() {
    // loader
    this.loading = true;
    const url: string = '/angularTest';
    this.httpService.get(url, { 'content-type': 'application/json' }).subscribe((response) => {
      if (response)
        this.setDataSourceBarChart(response);
        this.setDataSourcePieChart(response);
      this.toastrService.success("Data successfully Received.", "Success!");
    }, error => {
      this.toastrService.error(error + '. Data not Received.', "Error!");
      // loader
      this.loading = false;
      // change detection
      this.cd.markForCheck();
    });
  }

  //#endregion

  //#region set data source Bar Chart

  /**
   * set data source
   * @param responseData api response data
   */
  setDataSourceBarChart(responseData: IDataSource[]) {
    this.dataSource = [];
    responseData?.forEach((row, index) => {
      if (row.adClick && row.adImpressions) {
        let rowData: IDataSets = { data: [row.adClick, row.adImpressions, row.adSpend, row.ebookRoyalty, row.paperbackRoyalty], label: "data: " + index };
        this.dataSource.push(rowData);
      }
    });

    this.dataBar = {
      labels: ['adClick', 'adImpressions', 'adSpend', 'ebookRoyalty', 'paperbackRoyalty'],
      datasets: [...this.dataSource]
    };

    // open bar chart model
    this.openBarChartModel();

    // loader
    this.loading = true;
    // change detection
    this.cd.markForCheck();
  }

  //#endregion

   //#region set data source Pie Chart

  /**
   * set data source
   * @param responseData api response data
   */
  setDataSourcePieChart(responseData: IDataSource[]) {
    let adClick: number = 0;
    let adImpressions: number = 0;
    let adSpend: number = 0;
    let ebookRoyalty: number = 0;
    let paperbackRoyalty: number = 0
    responseData?.forEach((row) => {
      if (row.adClick && row.adImpressions) {
        adClick += row.adClick;
        adImpressions += row.adImpressions;
        adSpend += row.adSpend;
        ebookRoyalty += row.adImpressions;
        paperbackRoyalty += row.adImpressions;
      }
    });

    this.dataPie = {
      labels: ['adClick', 'adImpressions', 'adSpend', 'ebookRoyalty', 'paperbackRoyalty'],
      datasets: [{
        data: [adClick, adImpressions, adSpend, ebookRoyalty, paperbackRoyalty]
      }]
    };

    // loader
    this.loading = false;
    // change detection
    this.cd.markForCheck();
  }

  //#endregion

  //#region Chart Models

  /**
   * open bar chart model
   */
  openBarChartModel(){
    this.openPieChart = false;
    this.openBarChart = true;
  }

  toggleChart(){
    this.openBarChart = !this.openBarChart;
    this.openPieChart = !this.openPieChart;
  }

  //#endregion

}
