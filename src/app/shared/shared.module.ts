import { NgModule } from '@angular/core';
import { NotificationComponent } from './component/notification/notification.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './component/button/button.component';
import { NotificationService } from './services/notification.service';


@NgModule({
    imports:      [ CommonModule ],
    declarations: [NotificationComponent , ButtonComponent],
    providers: [NotificationService],
    exports: [NotificationComponent , ButtonComponent],
})
export class SharedModule {}
