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
  isVisibleFootballCountrys = false;

  ngOnInit(): void {
  }


  public onChange(isAdd: string): void {
    if (isAdd=="player") {
      this.isVisibleFootballClub = false;
      this.isVisibleFootballPlayers = true;
      this.isVisibleFootballCountrys = false;
      console.log(this.isVisibleFootballPlayers);
    }
    if (isAdd=="club") {
      this.isVisibleFootballClub = true;
      this.isVisibleFootballPlayers = false;
      this.isVisibleFootballCountrys = false;
    }
    if (isAdd=="country") {
      this.isVisibleFootballClub = false;
      this.isVisibleFootballPlayers = false;
      this.isVisibleFootballCountrys = true;
    }
  }
}
