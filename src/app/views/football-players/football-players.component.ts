import { Component, OnInit } from '@angular/core';
import {RestService} from '../../Services/rest.service';
import {FootballPlayers} from '../../FootballPlayer';
import {FuncService} from '../../Services/func.service';


@Component({
  selector: 'app-football-players',
  templateUrl: './football-players.component.html',
  styleUrls: ['./football-players.component.css']
})
export class FootballPlayersComponent implements OnInit {

  constructor(private rs: RestService, private get: FuncService) { }

  footballPlayers: FootballPlayers[] = [];


  ngOnInit(): void {
    this.rs.readFootballPlayers()
      .subscribe
      (
        (response) =>
        {
          this.footballPlayers = response[0]['football'];
          // this.countryCount.push(response[0]['football']);
        },
        (error) =>
        {
          console.log('No Data Found' + error);
        }

      );
  }
}
