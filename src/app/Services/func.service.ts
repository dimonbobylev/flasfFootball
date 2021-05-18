import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncService {

  constructor() {
  }

  clubLogo = '';
  CountryFlag = '';


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
    if (CountryFlag == 'Brazil') {
      this.CountryFlag = 'https://football-fun.ru/uploads/1/countries/flags/brazil-image-_x28.png';
    }
    if (CountryFlag == 'Argentina') {
      this.CountryFlag = 'https://football-fun.ru/uploads/1/countries/flags/argentina-image-_x28.png';
    }
    if (CountryFlag == 'Netherlands') {
      this.CountryFlag = 'https://football-fun.ru/uploads/1/countries/flags/netherlands-image-_x28.png';
    }
    if (CountryFlag == 'Portugal') {
      this.CountryFlag = "https://football-fun.ru/uploads/1/countries/flags/portugal-image-_x28.png";
    }
    if (CountryFlag == 'England') {
      this.CountryFlag = "assets/icon/flag-of-england.jpg";
    }
    if (CountryFlag == 'Spain') {
      this.CountryFlag = "assets/icon/spain-flag.png";
    }
    if (CountryFlag == 'Germany') {
      this.CountryFlag = "https://football-fun.ru/uploads/1/countries/flags/germany-image-_x28.png";
    }
    if (CountryFlag == 'France') {
      this.CountryFlag = "assets/icon/flag-franczii.jpg";
    }
    if (CountryFlag == 'Italy') {
      this.CountryFlag = "assets/icon/Flag_of_the_Italian.png";
    }
    return this.CountryFlag;
  }

}

