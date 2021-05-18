import {Component, Input, OnInit} from '@angular/core';
import {RestService} from '../../Services/rest.service';
import {FuncService} from '../../Services/func.service';
import {FootballClubs} from '../../FootballClubs';


@Component({
  selector: 'app-football-club',
  templateUrl: './football-club.component.html',
  styleUrls: ['./football-club.component.css']
})
export class FootballClubComponent implements OnInit {

  @Input() search: string;
  constructor(private rs: RestService, private getFlag: FuncService) { }

  footballClubs: FootballClubs[] = [];

  ngOnInit(): void {
    this.rs.readFootballClubs()
      .subscribe
      (
        (response) => {
          this.footballClubs = response[0]['clubs'];
        },
        (error) => {
          console.log('No Data Found' + error);
        }
      );
  }

}
