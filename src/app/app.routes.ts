import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { UsersComponent } from './pages/users/users.component';
 
import { AppSideLoginComponent } from './pages/authentication/side-login/side-login.component';
import { AppSideRegisterComponent } from './pages/authentication/side-register/side-register.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrdersItemComponent } from './pages/orders-item/orders-item.component';
import { ProductsComponent } from './pages/products/products.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { CategoryComponent } from './pages/category/category.component';
import { AppBadgeComponent } from './pages/ui-components/badge/badge.component';
import { AppChipsComponent } from './pages/ui-components/chips/chips.component';
import { AppListsComponent } from './pages/ui-components/lists/lists.component';
import { AppMenuComponent } from './pages/ui-components/menu/menu.component';
import { AppTooltipsComponent } from './pages/ui-components/tooltips/tooltips.component';
import { AppFormsComponent } from './pages/ui-components/forms/forms.component';
import { AppTablesComponent } from './pages/ui-components/tables/tables.component';
import { ProductsCardViewComponent } from './pages/products-card-view/products-card-view.component';
import { StarterComponent } from './pages/starter/starter.component';
import { SupportComponent } from './pages/support/support.component';
import { ChatComponent } from './pages/chat/chat.component';
export const routes: Routes = [

  {
    path: '',
    component: AppSideLoginComponent,
     
  },
  {
    path: 'login',
    component: AppSideLoginComponent,
     
  },
  {
    path: 'register',
    component: AppSideRegisterComponent,
     
  },



  // route table for admin interface 
  {
    path: 'admin',
    component: FullComponent,
    children: [

      {
        path: '',
        component: StarterComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      
      {
        path: 'support',
        component: SupportComponent,
      },
      { path: 'chat/:id', component: ChatComponent }
,

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
        path: 'products-cardview',
        component: ProductsCardViewComponent,
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
  } 
,

// route table for client interface

 


  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',

        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
      },
    ],
  },


 

  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
