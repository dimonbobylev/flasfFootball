import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RestService} from './Services/rest.service';
import { FootballClubComponent } from './views/football-club/football-club.component';
import { FootballPlayersComponent } from './views/football-players/football-players.component';
import { FootballCountryComponent } from './views/football-country/football-country.component';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { IfNotDirective } from './directives/if-not.directive';

@NgModule({
  declarations: [
    AppComponent,
    FootballClubComponent,
    FootballPlayersComponent,
    FootballCountryComponent,
    FilterPipe,
    IfNotDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
