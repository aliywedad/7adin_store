import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
 
import { CommonModule } from '@angular/common';
import { Constants } from 'src/app/tools/Constants';

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule, 
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
