import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule, NgForOf } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { Constants } from 'src/app/tools/Constants';
import { Service } from 'src/app/tools/Service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, NgScrollbarModule, MaterialModule],
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {


  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();
  constructor(
        private http: HttpClient,
    
  ){
    
  }
  name=""
  email=""
  phone=""

    async ngOnInit(): Promise<void> {
      if(Constants.admin==undefined){
        await Service.refreshData(this.http)
      }
      this.name=Constants.admin?.name|| " "
      this.email=Constants.admin?.email|| " "
      this.phone=Constants.admin?.phone || " "

      console.log("=== === ",Constants.admin)
     
  }

}

