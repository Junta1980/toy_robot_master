import { Injectable } from '@angular/core';
import { Direction, RobotSate, robotCols, robotRow } from '../model/global';
import { BehaviorSubject, Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})



export class RobotService {
  public robotSate$: BehaviorSubject<RobotSate> = new BehaviorSubject<RobotSate>({  x: -1,y: -1, f: Direction.NONE})

  x: number = -1;
  y: number =1;
  direction: Direction = Direction.NONE;




  constructor() { }

  place(x: number, y: number,  direction: Direction = Direction.N) {
    if (x >= 0 && x < robotCols && y >= 0 && y < robotRow) {
      this.x = x;
      this.y = y;
      this.direction = direction;
    }
    this.emitRobotState()
  }

  emitRobotState(){
    this.robotSate$.next({x: this.x , y: this.y , f: this.direction})
  }

  get robotSateY(): Observable<number>{
    return this.robotSate$.pipe(
      map(robotSate =>  robotSate.y)
    )
  }

  get robotSateX(): Observable<number>{
    return this.robotSate$.pipe(
      map(robotSate =>  robotSate.x)
    )
  }

  get robotSateF(): Observable<Direction>{
    return this.robotSate$.pipe(
      map(robotSate =>  robotSate.f)
    )
  }
  get robotSateIsPlaced$(): Observable<boolean>{
    return this.robotSate$.pipe(
      map(robotSate =>  (robotSate.x !== -1 && robotSate.y !== -1 &&  robotSate.f !== Direction.NONE))
    )
  }

  get robotSateReport$(): Observable<string>{
    return this.robotSate$.pipe(
      map(robotSate =>  `column : ${robotSate.x} row : ${robotSate.y} direction: ${Direction[robotSate.f]}`)
    )
  }

  move() {
    switch (this.direction) {
      case Direction.N:
        if (this.y < robotRow -1){
          this.y++
        } else{
          throw new Error("I can't go")
        }
        break;
      case Direction.S:
        if (this.y > 0){
          this.y--;
        } else{
          throw new Error("I can't go")
        }
        break;
      case Direction.E:
        if (this.x < robotCols-1){
          this.x++;
        } else{
          throw new Error("I can't go")
        }
        break;
      case Direction.W:
        if (this.x > 0){
          this.x--;
        } else{
          throw new Error("I can't go")
        }
        break;
    }
    this.emitRobotState()
  }

  left() {
    switch (this.direction) {
      case Direction.N:
        this.direction = Direction.W;
        break;
      case  Direction.S:
        this.direction = Direction.E;
        break;
      case  Direction.E:
        this.direction = Direction.N;
        break;
      case Direction.W:
        this.direction =  Direction.S;
        break;

    }
    this.emitRobotState()

  }

  right() {
    switch (this.direction) {
      case Direction.N:
        this.direction =  Direction.E;
        break;
      case  Direction.S:
        this.direction = Direction.W;
        break;
      case Direction.E:
        this.direction = Direction.S;
        break;
      case Direction.W:
        this.direction = Direction.N;
        break;
    }
    this.emitRobotState()
  }


  report() {
    return `column : ${this.x} row : ${this.y} direction: ${Direction[this.direction]}`;
  }
}
