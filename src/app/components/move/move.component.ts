import { Component, OnInit } from '@angular/core';
import { RobotService } from '../../services/robot.service';
import { NotificationService } from '../../shared/services/notification.service';
import { NotificationType } from '../../model/notification';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.scss']
})
export class MoveComponent implements OnInit {

  constructor(public robotService: RobotService , private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  leftRobot(){
    this.robotService.left()
  }

  rigthRobot(){
    this.robotService.right()
  }

  moveRobot(){
    try{
      this.robotService.move()
    } catch(err: any){
      this.notificationService.notify({
        title: 'Alert',
        message: err.message,
        type: NotificationType.danger,
      })
    }

  }

}
