import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { SupportService } from 'src/app/services/support.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
   MatTableModule,
    CommonModule,
    MatCardModule,
    FormsModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
      ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  chatId: string | null = null;
  messages: any[] = [
    { id: 1, sender: 'User', message: 'Hello?', time: '10:00 AM', admin: false },
    { id: 2, sender: 'Admin', message: 'Hello, how can I help you today?', time: '10:01 AM', admin: true },
    { id: 3, sender: 'User', message: 'I have a problem with the product.', time: '10:02 AM', admin: false },
    { id: 3, sender: 'User', message: 'I have a problem with the product.', time: '10:02 AM', admin: false },
    { id: 3, sender: 'User', message: 'I have a problem with the product.', time: '10:02 AM', admin: false },
    { id: 3, sender: 'User', message: 'I have a problem with the product.', time: '10:02 AM', admin: false },
    { id: 3, sender: 'User', message: 'I have a problem with the product.', time: '10:02 AM', admin: false },
    { id: 3, sender: 'User', message: 'I have a problem with the product.', time: '10:02 AM', admin: false },
    { id: 3, sender: 'User', message: 'I have a problem with the product.', time: '10:02 AM', admin: false },
    { id: 4, sender: 'Admin', message: 'What is the problem exactly?', time: '10:03 AM', admin: true }
  ];

  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.SupportService.send({
        "message": this.newMessage,
        "iduser": this.chatId? Number(this.chatId) : 0,
        "isFromAdmin": true
      }
    ).subscribe((data) => {this.newMessage = '';this.fetchData();});

       
        
       


      // this.messages.push({
      //   id: this.messages.length + 1,
      //   sender: 'User',
      //   message: this.newMessage,
      //   time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      //   admin: false
      // });
       // Clear input field
    }
  }

  constructor(private route: ActivatedRoute,private SupportService: SupportService ) {
    this.route.paramMap.subscribe(params => {
      this.chatId = params.get('id');
      console.log('Chat ID : ', this.chatId);
    });
  }

 


  fetchData() {
    this.SupportService.getSupportmessages(this.chatId? Number(this.chatId) : 0).subscribe((data) => {this.messages = data;console.log(data );});
    
  }
  ngOnInit(): void {
 this.fetchData();
  }


}
