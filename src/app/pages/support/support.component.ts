 



import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SupportService } from 'src/app/services/support.service';
import { MatCard } from '@angular/material/card';


 

const ELEMENT_DATA:  any[] = [
    {
        id: 1,
        imagePath: 'assets/images/profile/user-1.jpg',
        uname: 'Sidi mohamed ',
        date:"2 days ago",

        message: "hello i need help with this"
    },
    {
        id: 2,
        imagePath: 'assets/images/profile/user-2.jpg',
        uname: 'Aliy sidahmed',
        date:"2 days ago",
        message: "hello i need help with this ,please help me !" 

    },
    {
        id: 3,
        imagePath: 'assets/images/profile/user-3.jpg',
        uname: 'mohamed sidi ',
        date:"3 days ago",
        
        message: "hello i need help with this ,please help me !" 

    },
    {
        id: 4,
        imagePath: 'assets/images/profile/user-4.jpg',
        uname: 'ahmed Med',
        date:"4 days ago",
         
        message: "hello !" 

    },
];

@Component({
    selector: 'app-support',
    standalone: true,
    imports: [MaterialModule, CommonModule,RouterModule,MatCard],
    templateUrl: './support.component.html',
    styleUrl: './support.component.scss'
  })
  export class SupportComponent implements OnInit {

    dataSource :any = [];

    constructor(private router: Router,private SupportService: SupportService) {}

    fetchData() {
        this.SupportService.getSupportData().subscribe((data) => {this.dataSource = data;console.log(data );});
        
      }
      ngOnInit(): void {
     this.fetchData();
      }

    goToChat(chatId: number) {
      this.router.navigate(['admin/chat', chatId]);
    }
}
