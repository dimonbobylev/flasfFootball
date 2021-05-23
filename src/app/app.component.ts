import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    console.log('scroll');
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

  jumpUp() {
    let counter = 0;
    const intervalId = setInterval(() => {
      window.scrollBy(0,-5);
      counter += 1;
      if (document.documentElement.scrollTop === 0) {
        clearInterval(intervalId);
      }
    }, 50);
  }
  onScroll() {
    if(document.documentElement.scrollTop > 101) {
      this.isVisibleButtonUp = true;
    } else {
      this.isVisibleButtonUp = false;
    }
  }
}
