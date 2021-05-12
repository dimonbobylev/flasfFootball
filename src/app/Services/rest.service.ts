import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FootballPlayers} from '../FootballPlayer';


@Injectable({
  providedIn: 'root'
})
export class RestService implements OnInit {

  constructor(private http: HttpClient) { }

  FootballPlayersUrl = 'http://127.0.0.1:5000/footballReport/';

  // tslint:disable-next-line:contextual-lifecycle typedef
  ngOnInit(){
  }

  // tslint:disable-next-line:typedef
  readFootballPlayers() {
    return this.http.get<FootballPlayers[]>(this.FootballPlayersUrl);
  }
  readFootballClubs() {
    return this.http.get(this.FootballPlayersUrl);
  }
}
