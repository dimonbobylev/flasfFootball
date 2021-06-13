import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RestService} from './Services/rest.service';
import { FootballPlayersComponent } from './views/football-players/football-players.component';
import { FootballCountryComponent } from './views/football-country/football-country.component';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { IfNotDirective } from './directives/if-not.directive';
import {MenuComponent} from './views/menu/menu.component';
import { FootballClubComponent } from './views/football-club/football-club.component';
import { FilterClubsPipe } from './pipes/filter-clubs.pipe';
import { FootballCountryTopComponent } from './views/football-country-top/football-country-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FootballPlayersComponent,
    FootballCountryComponent,
    FilterPipe,
    IfNotDirective,
    FootballClubComponent,
    FilterClubsPipe,
    FootballCountryTopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
