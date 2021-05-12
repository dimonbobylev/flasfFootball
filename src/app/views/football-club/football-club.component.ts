import { Component, OnInit } from '@angular/core';
import {RestService} from '../../Services/rest.service';

@Component({
  selector: 'app-football-club',
  templateUrl: './football-club.component.html',
  styleUrls: ['./football-club.component.css']
})
export class FootballClubComponent implements OnInit {

  constructor(private rs: RestService) { }

  club = {};

  ngOnInit(): void {
    this.rs.readFootballClubs()
      .subscribe
      ((response) =>
        {
          this.club = response;
          console.log('this.footballPlayers ' + this.club[0]);
        },
        (error) =>
        {
          console.log('No Data Found' + error);
        }

      );
  }

}
