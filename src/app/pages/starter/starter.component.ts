import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AppSalesOverviewComponent } from 'src/app/components/sales-overview/sales-overview.component';
import { AppDailyActivitiesComponent } from 'src/app/components/daily-activities/daily-activities.component';
import { AppProductPerformanceComponent } from 'src/app/components/product-performance/product-performance.component';
import { AppBlogComponent } from 'src/app/components/apps-blog/apps-blog.component';
import { BarChartComponent } from 'src/app/charts/bar-chart/bar-chart.component';
import { PieComponent } from 'src/app/charts/pie/pie.component';



@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [
    MaterialModule,
    BarChartComponent,
PieComponent,
    AppSalesOverviewComponent,
    AppDailyActivitiesComponent,
    AppProductPerformanceComponent,
    AppBlogComponent
  ],
  templateUrl: './starter.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent {
data:any=[300, 240, 100, 432, 253, 253, 253, 253, 34,34]
labels:any=['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed']

labels_bar:any= ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
  '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ]
data_bar:any= ['467','576', '572', '79', '92',
  '574', '573', '576']
data2:any=[300, 240, 100, 432, 1000,  4]
labels2:any=['one','two','three','four','five','six']
 }