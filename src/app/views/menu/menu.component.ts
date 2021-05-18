import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // @Output() buttonClick = new EventEmitter<boolean>();
  @Input() choice: string;
  @Output() buttonClick = new EventEmitter();

  constructor() {
  }
  isVisibleFootball = false;
  isVisibleHockey = false;

  ngOnInit(): void {

  }

  // public changeCategory(change: boolean): void {
  //   this.buttonClick.emit(change);
  // }
}
