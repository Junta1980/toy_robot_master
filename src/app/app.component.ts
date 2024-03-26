import { Component, OnInit } from '@angular/core';
import { NotificationService } from './shared/services/notification.service';
import { NotificationType } from './model/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'toyrobot';
  constructor(private notificationService : NotificationService){}

  ngOnInit( ): void {
   this.notificationService.notify({
    title: 'How to play',
    message: 'insert coordinate or click on table',
    type: NotificationType.success
   })
  }


}

