import {Component, OnInit} from '@angular/core';
import {RestService} from '../../Services/rest.service';
import {FootballCountry} from '../../FootballCountry';
import {FuncService} from '../../Services/func.service';

@Component({
  selector: 'app-football-country',
  templateUrl: './football-country.component.html',
  styleUrls: ['./football-country.component.css']
})
export class FootballCountryComponent implements OnInit {

  constructor(private rs: RestService, private getFlag: FuncService) {
  }

  countrys: FootballCountry[] = [];

  ngOnInit(): void {
    this.rs.readFootballCountry()
      .subscribe
      ((response) => {
          this.countrys = response[0]['countryMass'];
        },
        (error) => {
          console.log('No Data Found' + error);
        }
      );
  }

}
