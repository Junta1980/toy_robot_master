import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RobotService } from '../../services/robot.service';
import { Direction, robotCols, robotRow } from '../../model/global';
import { customFormatValidatorCoordinate, customFormatValidatorFormat } from './customValidator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit , OnDestroy {
  robotCols = robotCols;
  robotRow = robotRow;
  sub? : Subscription;
  place = new FormControl( null , { updateOn: 'blur' , validators: [Validators.required, customFormatValidatorFormat , customFormatValidatorCoordinate]});
  constructor(public robotService: RobotService) { }

  ngOnInit(): void {
   this.sub = this.robotService.robotSateIsPlaced$.subscribe( isPlaced =>{
      if(isPlaced){
        this.place.reset();
      }
    });
  }

  placeRobot(){
    if(this.place.invalid){
      return
    }

    let value: string = this.place.value|| ''
    let [x, y, f] = value ? value.trim().split(',') : '';
    if(f){
      f = f.toUpperCase();
    }
    this.place.reset();
    this.robotService.place(Number(x),Number(y), Direction[f])
  }

  ngOnDestroy(): void {
    if(this.sub){ this.sub.unsubscribe()}
  }


}


