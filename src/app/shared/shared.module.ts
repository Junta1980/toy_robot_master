import { NgModule } from '@angular/core';
import { NotificationComponent } from './component/notification/notification.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './component/button/button.component';


@NgModule({
    imports:      [ CommonModule ],
    declarations: [NotificationComponent , ButtonComponent],
    exports: [NotificationComponent , ButtonComponent],
})
export class SharedModule {}
