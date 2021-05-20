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
  isVisibleFootballCountries = false;

  ngOnInit(): void {
  }


  public onChange(isAdd: string): void {
    if (isAdd=="player") {
      this.isVisibleFootballClub = false;
      this.isVisibleFootballPlayers = true;
      this.isVisibleFootballCountries = false;
      console.log(this.isVisibleFootballPlayers);
    }
    if (isAdd=="club") {
      this.isVisibleFootballClub = true;
      this.isVisibleFootballPlayers = false;
      this.isVisibleFootballCountries = false;
    }
    if (isAdd=="country") {
      this.isVisibleFootballClub = false;
      this.isVisibleFootballPlayers = false;
      this.isVisibleFootballCountries = true;
    }
  }
}
