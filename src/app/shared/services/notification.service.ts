import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { NotificationMess } from 'src/app/model/notification';

@Injectable()

export class NotificationService {
    public notifyRequest$ = new ReplaySubject<NotificationMess>();

    constructor() {}

    notify(notification: NotificationMess) {
        this.notifyRequest$.next(notification);
    }
}
