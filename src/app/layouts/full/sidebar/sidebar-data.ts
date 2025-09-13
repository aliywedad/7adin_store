import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'fa-solid fa-house',
    route: '/admin',
  },

  
  {
    navCap: ' ',
  },
  
  {
    displayName: 'Users',
    iconName: 'fa-solid fa-users ',
    route: '/admin/users',
  },
    {
    displayName: 'Products',
    iconName: 'fa-solid fa-users ',
    route: '/admin/products',
  },
 
 
 
   
];
