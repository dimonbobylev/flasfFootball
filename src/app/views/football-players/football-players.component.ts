import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RestService} from '../../Services/rest.service';
import {FootballPlayers} from '../../FootballPlayer';
import {FuncService} from '../../Services/func.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-football-players',
  templateUrl: './football-players.component.html',
  styleUrls: ['./football-players.component.css']
})
export class FootballPlayersComponent implements OnInit, AfterViewInit {

  // поля для таблицы (те, что отображают данные из задачи - должны совпадать с названиями переменных класса)
  displayedColumns: string[] = ['id', 'name', 'club', 'country', 'age', 'position', 'millions'];
  dataSource: MatTableDataSource<FootballPlayers>; // контейнер - источник данных для таблицы
  footballPlayers: FootballPlayers[] = [];

  // ссылки на компоненты таблицы
  @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) private sort: MatSort;

  constructor(private rs: RestService, private getFlag: FuncService) {
    this.dataSource = new MatTableDataSource(this.footballPlayers);
  }



  ngOnInit(): void {
    this.rs.readFootballPlayers()
      .subscribe
      (
        (response) => {
          this.footballPlayers = response[0]['football'];
          this.dataSource.data = response[0]['football'];
        },
        (error) => {
          console.log('No Data Found' + error);
        }
      );
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

}
