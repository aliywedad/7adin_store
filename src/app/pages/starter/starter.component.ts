import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AppSalesOverviewComponent } from 'src/app/components/sales-overview/sales-overview.component';
import { AppDailyActivitiesComponent } from 'src/app/components/daily-activities/daily-activities.component';
import { AppProductPerformanceComponent } from 'src/app/components/product-performance/product-performance.component';
import { AppBlogComponent } from 'src/app/components/apps-blog/apps-blog.component';
import { BarChartComponent } from 'src/app/charts/bar-chart/bar-chart.component';
import { PieComponent } from 'src/app/charts/pie/pie.component';
import { CommonModule } from '@angular/common';
import { Constants } from 'src/app/tools/Constants';

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    BarChartComponent,
    PieComponent,
    AppSalesOverviewComponent,
    AppDailyActivitiesComponent,
    AppProductPerformanceComponent,
    AppBlogComponent,
  ],
  templateUrl: './starter.component.html',
  styleUrl: './starter.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent implements OnInit {
  ngOnInit(): void {
    console.log(Constants.admin)
  }
  dailySales = 35;
  dailyAmount = 1290.5;
  pendingOrders = 7;

  lastSales = [
    { customer: 'محمد علي', amount: 120, date: new Date(), status: 'مدفوع' },
    { customer: 'فاطمة الزهراء', amount: 80, date: new Date(), status: 'معلق' },
    { customer: 'يوسف أحمد', amount: 150, date: new Date(), status: 'مدفوع' },
  ];

  sale = [
    {
      id: 31,
      name: 'علي الحسن',
      email: 'ali.hassan@example.com',
      roles: ['المحاسب'],
    },
    {
      id: 41,
      name: 'خديجة محمد',
      email: 'khadija.mohamed@example.com',
      roles: ['الموارد البشرية'],
    },
    {
      id: 51,
      name: 'يوسف إبراهيم',
      email: 'youssef.ibrahim@example.com',
      roles: ['الدعم الفني', 'مدير المنتجات'],
    },
  ];
}
