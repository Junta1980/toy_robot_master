import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RobotService } from '../../services/robot.service';
import { Direction, robotCols, robotRow } from '../../model/global';
import { customFormatValidatorCoordinate, customFormatValidatorFormat } from './customValidator';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {
  robotCols = robotCols;
  robotRow = robotRow;
  place = new FormControl( null , { updateOn: 'blur' , validators: [Validators.required, customFormatValidatorFormat , customFormatValidatorCoordinate]});
  constructor(public robotService: RobotService) { }

  ngOnInit(): void {}

  placeRobot(){
    console.log(this.place)
    if(this.place.invalid){
      return
    }
    let value: string = this.place.value|| ''
    const [x, y, f] = value ? value.trim().split(',') : '';
    console.log(x, y, f)

    this.robotService.place(Number(x),Number(y), Direction[f])
  }



}


