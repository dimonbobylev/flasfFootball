import { Component, OnInit } from '@angular/core';
import {RestService} from '../../Services/rest.service';
import {FootballPlayers} from '../../FootballPlayer';

@Component({
  selector: 'app-football-players',
  templateUrl: './football-players.component.html',
  styleUrls: ['./football-players.component.css']
})
export class FootballPlayersComponent implements OnInit {

  constructor(private rs: RestService) { }

  footballPlayers: FootballPlayers[] = [];

  ngOnInit(): void {
    this.rs.readFootballPlayers()
      .subscribe
      (
        (response) =>
        {
          this.footballPlayers = response[0]['football'];
          // console.log('this.footballPlayers' + this.footballPlayers[0].club);
        },
        (error) =>
        {
          console.log('No Data Found' + error);
        }

      );
  }

}
