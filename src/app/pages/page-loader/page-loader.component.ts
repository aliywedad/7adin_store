import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/tools/Constants';
import { HttpClient } from '@angular/common/http';
import { PageLoaderService } from './Page-Loader-service';
import { Administrateur } from 'src/app/tools/Administrateur';
import { LoadingComponent } from 'src/app/tools/loading/loading.component';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss'],
  standalone: true,
  imports: [LoadingComponent],
})
export class PageLoaderComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  async ngOnInit() {
    this.initWebSite();
  }
  user: Administrateur | null | any = {};

  async initWebSite() {
    console.log('init the function ======');
    let rout: string = Constants.route;
    if (this.user === null) {
      console.log('init the function ====== user === null');

      rout = '/login';
      this.router.navigateByUrl(rout);
      Constants.authAdmin = null;
      Constants.admin = null;
    } else {
      console.log('init the function ====== ');
      console.log('init the function ====== ');
      

      Constants.authAdmin = this.user;
            console.log('init the function ======  Constants.authAdmin ', Constants.authAdmin);

      // let details = await PageLoaderService.getAdminByUID(this.http, this.user.uid!);
      // if (details.admin === null) {

      //  }
      // Constants.admin = Object.values(details.admin)[0];
      Constants.admin = {
        rolesGroupe: ['admin', 'user'],
        token: '123',
      };
            console.log('init the function ======  Constants.admin ', Constants.admin);

      if (!Constants.admin.rolesGroupe) {
        Constants.admin.rolesGroupe = [];
      }

      // if (
      //   rout === '' ||
      //   rout === '/dashboard/manager' ||
      //   rout === '/auth/signin' ||
      //   rout === '/auth/reset-password' ||
      //   rout === '/error' ||
      //   rout === '/maintenance'
      // )
        rout = '/admin';
      this.router.navigateByUrl(rout);
      // .catch(e => {
      //   this.router.navigateByUrl("error")
      // })
    }
  }
}
