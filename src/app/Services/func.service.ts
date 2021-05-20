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
      this.CountryFlag = 'assets/icon/br.png';
    }
    if (CountryFlag == 'Argentina') {
      this.CountryFlag = 'assets/icon/ar.png';
    }
    if (CountryFlag == 'Netherlands') {
      this.CountryFlag = 'assets/icon/nl.png';
    }
    if (CountryFlag == 'Portugal') {
      this.CountryFlag = "assets/icon/pt.png";
    }
    if (CountryFlag == 'England') {
      this.CountryFlag = "assets/icon/gb-eng.png";
    }
    if (CountryFlag == 'Spain') {
      this.CountryFlag = "assets/icon/es.png";
    }
    if (CountryFlag == 'Germany') {
      this.CountryFlag = "assets/icon/de.png";
    }
    if (CountryFlag == 'France') {
      this.CountryFlag = "assets/icon/fr.png";
    }
    if (CountryFlag == 'Italy') {
      this.CountryFlag = "assets/icon/it.png";
    }
    if (CountryFlag == 'Russia') {
      this.CountryFlag = "assets/icon/ru.png";
    }
    if (CountryFlag == 'Austria') {
      this.CountryFlag = "assets/icon/at.png";
    }
    if (CountryFlag == 'Belgium') {
      this.CountryFlag = "assets/icon/be.png";
    }
    return this.CountryFlag;
  }

}

