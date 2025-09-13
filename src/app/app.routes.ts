import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { UsersComponent } from './pages/users/users.component';

import { AppSideLoginComponent } from './pages/side-login/side-login.component';
import { AppSideRegisterComponent } from './pages/authentication/side-register/side-register.component';

import { AppBadgeComponent } from './pages/ui-components/badge/badge.component';
import { AppChipsComponent } from './pages/ui-components/chips/chips.component';
import { AppListsComponent } from './pages/ui-components/lists/lists.component';
import { AppMenuComponent } from './pages/ui-components/menu/menu.component';
import { AppTooltipsComponent } from './pages/ui-components/tooltips/tooltips.component';
import { AppFormsComponent } from './pages/ui-components/forms/forms.component';
import { AppTablesComponent } from './pages/ui-components/tables/tables.component';

import { PageLoaderComponent } from './pages/page-loader/page-loader.component';
import { StarterComponent } from './pages/starter/starter.component';
import { AddUserComponent } from './pages/users/components/add-user/add-user.component';
import { EditUserComponent } from './pages/users/components/edit-user/edit-user.component';
import { ProductsComponent } from './pages/products/products.component';
import { AddProductComponent } from './pages/products/components/add-product/add-product.component';
import { EditProductComponent } from './pages/products/components/edit-product/edit-product.component';
export const routes: Routes = [
  {
    path: '',
    component: PageLoaderComponent,
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
        path: 'add-users',
        component: AddUserComponent,
      },

      {
        path: 'edit-users/:id',
        component: EditUserComponent
      },

            {
        path: 'products',
        component: ProductsComponent,
      },
            {
        path: 'add-products',
        component: AddProductComponent,
      },

      {
        path: 'edit-products/:id',
        component: EditProductComponent
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

 
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
