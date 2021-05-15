import { Component, OnInit } from '@angular/core';
import {RestService} from '../../Services/rest.service';

@Component({
  selector: 'app-football-club',
  templateUrl: './football-club.component.html',
  styleUrls: ['./football-club.component.css']
})
export class FootballClubComponent implements OnInit {

  constructor(private rs: RestService) { }


  ngOnInit(): void {
  }

}
