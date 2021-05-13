import { Component, OnInit } from '@angular/core';
import {RestService} from '../../Services/rest.service';

@Component({
  selector: 'app-football-club',
  templateUrl: './football-club.component.html',
  styleUrls: ['./football-club.component.css']
})
export class FootballClubComponent implements OnInit {

  constructor(private rs: RestService) { }

  countrys = {};

  ngOnInit(): void {
    this.rs.readFootballCountry()
      .subscribe
      ((response) =>
        {
          this.countrys = response;
          console.log('this.footballPlayers ' + this.countrys);
        },
        (error) =>
        {
          console.log('No Data Found' + error);
        }

      );
  }

}
