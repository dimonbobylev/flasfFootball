import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() buttonClick = new EventEmitter<boolean>();

  constructor() {
  }
  isVisibleFootball = false;
  isVisibleHockey = false;

  ngOnInit(): void {

  }

  public changeCategory(change: boolean): void {
    this.buttonClick.emit(change);
  }
}
