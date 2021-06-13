import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClubCheck} from '../../ClubCheck';
import {FuncService} from '../../Services/func.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() choice: string;
  @Input() allClub: ClubCheck[];
  @Output() buttonClick = new EventEmitter();
  @Output() updateTask: EventEmitter<ClubCheck> = new EventEmitter<ClubCheck>();


  isVisibleFootball = false;
  isVisibleHockey = false;
  filterClub = false;
  filterPlayers = false;
  filterCountry = false;
  constructor(private getClubs: FuncService) {
  }


  ngOnInit(): void {
  }

  updateAllComplete() {
    for(let j in this.allClub) {
      if(this.allClub[j].completed ===true) {
        this.updateTask.emit(this.allClub[j]);
      }
      // console.log(this.allClub[j].name + this.allClub[j].completed)
    }
    this.getClubs.getCheckClubs(this.allClub);
  }

  public changeCategory = (change: boolean): void => {
    this.buttonClick.emit(change);
  };

  btnFilter(nameCategory) {
    if(nameCategory === 'club') {
      this.filterClub = true;
      this.filterPlayers = false;
      this.filterCountry = false;
    }
    if(nameCategory === 'player') {
      this.filterClub = false;
      this.filterPlayers = true;
      this.filterCountry = false;
    }
    if(nameCategory === 'country') {
      this.filterClub = false;
      this.filterPlayers = false;
      this.filterCountry = true;
    }
  }

  // showCheckClubs() {
  //   console.log("checkClub " + this.allClub);
  // }
}
