import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
  }
  search = '';
  isVisibleFootballClub = false;
  isVisibleFootballPlayers = true;

  ngOnInit(): void {
  }


  public onChange(isAdd: boolean): void {
    if (isAdd) {
      this.isVisibleFootballClub = false;
      this.isVisibleFootballPlayers = true;
    } else {
      this.isVisibleFootballClub = true;
      this.isVisibleFootballPlayers = false;
    }
  }
}
