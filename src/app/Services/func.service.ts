import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ClubCheck} from '../ClubCheck';


@Injectable({
  providedIn: 'root'
})
export class FuncService {

  constructor() {
  }
  clubsSubject = new Subject<ClubCheck[]>();
  clubLogo = '';
  CountryFlag = '';


  getCheckClubs(checkClub: ClubCheck[]){
    const clubs = checkClub.filter(club => club.completed === true);
    // for(let j in clubs) {
    //   console.log(clubs[j].name)
    // }
    this.clubsSubject.next(clubs);
  }

  getClubLogo(clubName): string {
    this.clubLogo = "";
    if (clubName == 'Barcelona') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/barselona-image-_x28.png';
    }
    if (clubName == 'Juventus') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/yuventus-image-_x28.png';
    }
    if (clubName == 'PSG') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/pszh-image-_x28.png';
    }
    if (clubName == 'Liverpool') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/liverpul-image-_x28.png';
    }
    if (clubName == 'Manchester City') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/manchester-siti-image-_x28.png';
    }
    if (clubName == 'Real Madrid') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/real-madrid-1-image-_x28.png';
    }
    if (clubName == 'Bayern') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/bavariya-image-_x28.png';
    }
    if (clubName == 'Arsenal') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/arsenal-image-_x28.png';
    }
    if (clubName == 'Manchester United') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/manchester-yunayted-image-_x28.png';
    }
    if (clubName == 'Atletico') {
      this.clubLogo = 'https://football-fun.ru/uploads/teams/atletiko-madrid-image-_x28.png';
    }
    return this.clubLogo;
  }

  getCountryFlag(CountryFlag): string {
    this.CountryFlag = "";
    this.CountryFlag = "assets/icon/"+CountryFlag+".png";
    return this.CountryFlag;
  }
}

