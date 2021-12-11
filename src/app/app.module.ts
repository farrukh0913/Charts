// modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
// components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PieChartComponent } from './charts/components/pie-chart/pie-chart.component';
import { BarChartComponent } from './charts/components/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, PieChartComponent, BarChartComponent
  ],
  imports: [
    BrowserModule, MatIconModule, MatTooltipModule, NgChartsModule, MatButtonModule, BrowserAnimationsModule, HttpClientModule, FormsModule, RouterModule, AppRoutingModule, NgChartsModule, ToastrModule.forRoot()
  ],
  exports: [NgChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
