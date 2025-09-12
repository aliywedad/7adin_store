import { Administrateur } from './Administrateur';

export class Constants {
 

  static authAdmin: any | null;
  static admin: Administrateur | null;
  static route: string;
  static imgsrc: string = 'assets/images/user/anonymous.png';
  static readonly imageStorageRef = '/Admins/images/';
  static redirect = false;
  static URLS: any;
}

export class UpdateType {
  static MODIFICATION = 1;
  static PROFILE = 2;
}

export class URLS {
  static serverPath = 'http://localhost:9091/api/';
  static getAdminByUID = URLS.serverPath + '/getAdminByUID';
  static updateAdminProfile = URLS.serverPath + '/updateAdminProfile';
  static getAllRoles = URLS.serverPath + '/getAllRoles';
}

export class RolesId {
  static dashBoad = 'consulter-dashboard';
  static profile_admin = 'profile-admin';
}
