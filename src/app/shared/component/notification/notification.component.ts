import { Component, OnInit } from '@angular/core';
import { NotificationMess, NotificationType } from 'src/app/model/notification';
import { NotificationService } from '../../services/notification.service';
import { debounceTime, tap } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  showNotification: boolean = false;
  incommingNotification: NotificationMess = {
    title: '',
    message: '',
    type: NotificationType.danger,
};
  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notifyRequest$
            .pipe(
                tap((notification: NotificationMess) => {
                    console.log(notification)
                    this.incommingNotification = notification;
                    this.showNotification = true;
                }),
                debounceTime(3000),
                tap(() => {
                    this.showNotification = false;
                })
            )
            .subscribe(
            );
  }

}
