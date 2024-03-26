import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Direction, RobotSate } from '../../../model/global';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent implements OnInit {
  @Input() direction: Direction | null = Direction.NONE;
  @Input() isRobotPosition: boolean = false;
  constructor() { }
  direct = Direction
  ngOnInit(): void {
  }

}
