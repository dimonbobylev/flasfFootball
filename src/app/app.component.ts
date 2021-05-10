import {Component, OnInit} from '@angular/core';
import {RestService} from './Services/rest.service';
import {FootballPlayers} from './FootballPlayer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private rs: RestService){}

  club = ['Barcelona', 'Juventus', 'PSG', 'PSV'];
  footballPlayers: FootballPlayers[] = [];

  ngOnInit(): void {
    this.rs.readFootballPlayers()
      .subscribe
      (
        (response) =>
        {
          this.footballPlayers = response[0]['football'];
        },
        (error) =>
        {
          console.log('No Data Found' + error);
        }

      );
  }
}
