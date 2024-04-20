import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationMess, NotificationType } from 'src/app/model/notification';
import { NotificationService } from '../../services/notification.service';
import { Subscription, debounceTime, tap } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit , OnDestroy {
  showNotification: boolean = false;
  sub? : Subscription;
  incommingNotification: NotificationMess = {
    title: '',
    message: '',
    type: NotificationType.danger,
};
  constructor(private notificationService: NotificationService) { }




  ngOnInit(): void {
  this.sub = this.notificationService.notifyRequest$
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

  ngOnDestroy(): void {
    if(this.sub){ this.sub.unsubscribe()}
  }

}
