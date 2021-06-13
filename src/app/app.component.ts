import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ClubCheck} from './ClubCheck';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    this.onScroll();
  }

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  constructor() {
  }
  search = '';
  isVisibleFootballClub = false;
  isVisibleFootballPlayers = true;
  isVisibleFootballCountries = false;
  isVisibleButtonUp = false;
  nameClub: ClubCheck;
  clubMy = "";
  checkAll = [];

  ngOnInit(): void {
  }


  public onChange(isAdd: string): void {
    if (isAdd=="player") {
      this.isVisibleFootballClub = false;
      this.isVisibleFootballPlayers = true;
      this.isVisibleFootballCountries = false;
     }
    if (isAdd=="club") {
      this.checkAll = [];  // очистка массива клубов
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

  jumpUp() {  //  при нажатии на кнопку ВВЕРХ - подъем в начало
    let counter = 0;
    const intervalId = setInterval(() => {
      window.scrollBy(0,-5);
      counter += 1;
      if (document.documentElement.scrollTop === 0) {
        clearInterval(intervalId);
      }
    }, 50);
  }
  onScroll() {  //  отображение или скрытие кнопки ВВЕРХ
    if(document.documentElement.scrollTop > 101) {
      this.isVisibleButtonUp = true;
    } else {
      this.isVisibleButtonUp = false;
    }
  }
  onChoice(chClub: ClubCheck) {
    this.nameClub = chClub;
    this.clubMy = chClub.name;
    // console.log(this.nameClub);
  }

  filterClubs(ch: ClubCheck) {
    // console.log("filterClubs" + ch.name)
    this.checkAll.unshift(ch);
  }
}
