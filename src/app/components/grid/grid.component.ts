import { Component, OnInit } from '@angular/core';
import {  robotCols, robotRow } from '../../model/global';
import { RobotService } from '../../services/robot.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  robotcols: number[] = []
  robotRows: number[] = []
  constructor(public robotService: RobotService ) { }

  ngOnInit(): void {
   this.robotcols = [...Array(robotCols).keys()]
   this.robotRows = [...Array(robotRow).keys()].reverse();
  }

  placeRobot(x: number,y: number){

    this.robotService.place(x,y,0)
  }

}
