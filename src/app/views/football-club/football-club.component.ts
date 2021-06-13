import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {RestService} from '../../Services/rest.service';
import {FuncService} from '../../Services/func.service';
import {FootballClubs} from '../../FootballClubs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ClubCheck} from '../../ClubCheck';


@Component({
  selector: 'app-football-club',
  templateUrl: './football-club.component.html',
  styleUrls: ['./football-club.component.css']
})
export class FootballClubComponent implements OnInit, AfterViewInit {

  // поля для таблицы (те, что отображают данные из задачи - должны совпадать с названиями переменных класса)
  displayedColumns: string[] = ['id', 'club', 'country', 'r2021', 'total', 'millions'];
  dataSource: MatTableDataSource<FootballClubs>; // контейнер - источник данных для таблицы
  footballClubs: FootballClubs[] = [];
  newFootballClubs: FootballClubs[] = [];
  checkClub: ClubCheck[] = [];
  newCheck: ClubCheck[] = [];
  chek = false;

  @Input() myClub: ClubCheck;  // принимаем название клуба после клика по CheckBox

  @Output() allClub: EventEmitter<ClubCheck> = new EventEmitter<ClubCheck>();  // выдаем полный список клубов в app-component
  // ссылки на компоненты таблицы
  @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) private sort: MatSort;

  constructor(private rs: RestService, private getFlag: FuncService) {
    this.dataSource = new MatTableDataSource(this.footballClubs);
  }


  ngOnInit(): void {
    this.rs.readFootballClubs()
      .subscribe
      (
        (response) => {
          this.footballClubs = response[0]['clubs'];
          this.dataSource.data = response[0]['clubs'];
          for (let ch of this.footballClubs) {
            this.checkClub.unshift({name: ch.club, completed: false, color: 'primary'})
            this.allClub.emit({name: ch.club, completed: false, color: 'primary'});
          }
        },
        (error) => {
          console.log('No Data Found' + error);
        }
      );
    this.getFlag.clubsSubject.subscribe((res)=>{
      this.newCheck = res;
      this.checkClubs(this.newCheck);
      this.chek = true;
      // console.log("res!!! " + res);
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort; // компонент для сортировки данных (если необходимо)
    this.dataSource.paginator = this.paginator; // обновить компонент постраничности (кол-во записей, страниц)
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  checkClubs(clubs) {
    console.log("checkClubs" + clubs.length);

    for (let i=0; i<clubs.length; i++) {
      console.log(clubs[i].name);
    }
    // this.dataSource.data = this.newFootballClubs;
  }

  // private doSomething(myClub: ClubCheck) {
  //   console.log("doSomething = " + myClub);
  // }
}
