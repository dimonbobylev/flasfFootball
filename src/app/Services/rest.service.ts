import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FootballPlayers} from '../FootballPlayer';
import {FootballClubs} from '../FootballClubs';
import {FootballCountriesTop} from '../FootballCoutriesTop';


@Injectable({
  providedIn: 'root'
})
export class RestService implements OnInit {

  constructor(private http: HttpClient) {
  }

  FootballPlayersUrl = 'http://127.0.0.1:5000/footballReport/';
  FootballCountryUrl = 'http://127.0.0.1:5000/footballCountry/';
  FootballClubsUrl = 'http://127.0.0.1:5000/footballClub/';
  FootballCountriesTop = 'http://127.0.0.1:5000/footballCountriesTop/';

  // tslint:disable-next-line:contextual-lifecycle typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  readFootballPlayers() {
    return this.http.get<FootballPlayers[]>(this.FootballPlayersUrl);
  }
  readFootballClubs() {
    return this.http.get<FootballClubs[]>(this.FootballClubsUrl);
  }
  readFootballCountriesTop() {
    return this.http.get<FootballCountriesTop[]>(this.FootballCountriesTop);
  }

  readFootballCountry() {
    return this.http.get(this.FootballCountryUrl);
  }
}
