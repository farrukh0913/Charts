import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsRoutingModule } from './charts-routing.module';
import { NgChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgChartsModule
  ]
})

export class ChartsModule { }
