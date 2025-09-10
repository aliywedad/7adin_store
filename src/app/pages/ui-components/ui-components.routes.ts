import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { AppFormsComponent } from './forms/forms.component';
import { AppTablesComponent } from './tables/tables.component';
import { UsersComponent } from '../users/users.component';
import { OrdersComponent } from '../orders/orders.component';
import { PaymentsComponent } from '../payments/payments.component';
import { ProductsComponent } from '../products/products.component';
import { CategoryComponent } from '../category/category.component';
import { OrdersItemComponent } from '../orders-item/orders-item.component';
export const UiComponentsRoutes: Routes = [
  {
    path: 'admin',
    children: [


      {
        path: 'users',
        component: UsersComponent,
      },
      
      {
        path: 'orders',
        component: OrdersComponent,
      },
      {
        path: 'ordersItems',
        component: OrdersItemComponent,

      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'payments',
        component: PaymentsComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'badge',
        component: AppBadgeComponent,
      },
      {
        path: 'chips',
        component: AppChipsComponent,
      },
      {
        path: 'lists',
        component: AppListsComponent,
      },
      {
        path: 'menu',
        component: AppMenuComponent,
      },
      {
        path: 'tooltips',
        component: AppTooltipsComponent,
      },
      {
        path: 'forms',
        component: AppFormsComponent,
      },
      {
        path: 'tables',
        component: AppTablesComponent,
      },
    ],
  },
];
