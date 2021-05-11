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

  ngOnInit(): void { }
}
