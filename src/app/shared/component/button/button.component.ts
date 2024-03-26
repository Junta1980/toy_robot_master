import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output()  onClick = new EventEmitter<any>();
  @Input()  disabled : boolean = false
  constructor() { }

  ngOnInit(): void {

  }

  onBtnClick(){
    this.onClick.emit();
  }

}
