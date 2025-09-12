import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Constants } from './Constants';
// import { URLS } from 'src/Constants/Constants';
 

 
const user = Constants.admin  ;

export class Service {
  refresh$: any;
  static getHeaders() {
      throw new Error('Method not implemented.');
  }


    /** Pour les GET simples, plus de token. */
  static getHeader(): { headers: HttpHeaders } {
    return { headers: new HttpHeaders({ Accept: '*/*' }) };
  }
  private static token: string | null = null;

  static async getHeadersWithIdToken(): Promise<any> {
    const options = {
      headers: new HttpHeaders({
        "Accept": "*/*",
        "Authorization": await this.getIdToken(),
      })
    };
    return options;
  }

  static async getIdToken(): Promise<string> {
    if (this.token) {
      return this.token;
    }

    if(Constants.admin && Constants.admin.token){
      this.token = Constants.admin.token
      return Constants.admin.token;
    }
    return new Promise((resolve, reject) => {
      // get token function 
    });
  }
 

}
