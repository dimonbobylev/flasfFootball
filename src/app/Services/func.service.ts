import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncService {

  constructor() { }
  clubLogo = "";
  CountryFlag = "";


  getClubLogo(clubName): string {
    if(clubName=="Barselona") this.clubLogo = "https://football-fun.ru/uploads/teams/barselona-image-_x28.png";
    if(clubName=="Juventus") this.clubLogo = "https://football-fun.ru/uploads/teams/yuventus-image-_x28.png";
    if(clubName=="PSG") this.clubLogo = "https://football-fun.ru/uploads/teams/pszh-image-_x28.png";
    if(clubName=="Liverpool") this.clubLogo = "https://football-fun.ru/uploads/teams/liverpul-image-_x28.png";
    return this.clubLogo;
  }
  getCountryFlag(CountryFlag): string {
    if(CountryFlag=="Brazil") this.CountryFlag = "https://football-fun.ru/uploads/1/countries/flags/brazil-image-_x28.png";
    if(CountryFlag=="Argentina") this.CountryFlag = "https://football-fun.ru/uploads/1/countries/flags/argentina-image-_x28.png";
    if(CountryFlag=="Netherlands") this.CountryFlag = "https://football-fun.ru/uploads/1/countries/flags/netherlands-image-_x28.png";
    if(CountryFlag=="Portugal") this.CountryFlag = "https://football-fun.ru/uploads/1/countries/flags/portugal-image-_x28.png";
    return this.CountryFlag;
  }

}

