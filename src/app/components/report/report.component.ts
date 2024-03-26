import { Component, OnInit } from '@angular/core';
import { RobotService } from 'src/app/services/robot.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  RobotReport: boolean = false
  constructor(public robotService: RobotService) { }

  ngOnInit(): void {
  }

  report(){
    this.RobotReport = !this.RobotReport
  }
}
