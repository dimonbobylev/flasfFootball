import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RestService} from '../../Services/rest.service';
import {FuncService} from '../../Services/func.service';
import {FootballClubs} from '../../FootballClubs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


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
