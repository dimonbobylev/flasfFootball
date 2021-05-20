import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {RestService} from '../../Services/rest.service';
import {FuncService} from '../../Services/func.service';
import {FootballCountriesTop} from '../../FootballCoutriesTop';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-football-country-top',
  templateUrl: './football-country-top.component.html',
  styleUrls: ['./football-country-top.component.css']
})
export class FootballCountryTopComponent implements OnInit, AfterViewInit, OnDestroy {

  // поля для таблицы (те, что отображают данные из задачи - должны совпадать с названиями переменных класса)
  displayedColumns: string[] = ['id', 'country', 'r2017', 'r2021', 'total'];
  dataSource: MatTableDataSource<FootballCountriesTop>; // контейнер - источник данных для таблицы
  footballCountriesTop: FootballCountriesTop[] = [];

  // ссылки на компоненты таблицы
  @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) private sort: MatSort;

  constructor(private rs: RestService, private getFlag: FuncService) {
    this.dataSource = new MatTableDataSource(this.footballCountriesTop);
  }



  ngOnInit(): void {
    this.rs.readFootballCountriesTop()
      .subscribe
      (
        (response) => {
          this.footballCountriesTop = response[0]['countries'];
          // this.dataSource = new MatTableDataSource();
          this.dataSource.data = response[0]['countries'];
          // this.refreshTable();
        },
        (error) => {
          console.log('No Data Found' + error);
        }
      );
   }
  // в этом методе уже все проинциализировано, поэтому можно присваивать объекты (иначе может быть ошибка undefined)
  ngAfterViewInit(): void {
    //this.refreshTable();
    this.dataSource.sort = this.sort; // компонент для сортировки данных (если необходимо)
    this.dataSource.paginator = this.paginator; // обновить компонент постраничности (кол-во записей, страниц)
  }
  ngOnDestroy(): void {

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private refreshTable(): void {
    // this.dataSource.data = this.footballCountriesTop; // обновить источник данных (т.к. данные массива tasks обновились)
    // this.addTableObjects();
    // когда получаем новые данные..
    // чтобы можно было сортировать по столбцам "категория" и "приоритет", т.к. там не примитивные типы, а объекты
    // @ts-ignore - показывает ошибку для типа даты, но так работает, т.к. можно возвращать любой тип
    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => {

      // по каким полям выполнять сортировку для каждого столбца
      // switch (sortHeaderId) {
      //   case 'id': {
      //     return footballCountriesTop.id;
      //   }
      //   case 'country': {
      //     return footballCountriesTop.country;
      //   }
      //   case 'total': {
      //     console.log(footballCountriesTop.total)
      //     return footballCountriesTop.total;
      //   }
      // }
    };
   }
  private addTableObjects() {
    this.dataSource.sort = this.sort; // компонент для сортировки данных (если необходимо)
    this.dataSource.paginator = this.paginator; // обновить компонент постраничности (кол-во записей, страниц)

  }
}
