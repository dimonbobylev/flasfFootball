import {Pipe, PipeTransform} from '@angular/core';
import {FootballPlayers} from '../FootballPlayer';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(footballPlayer: FootballPlayers[], search: string = ''): FootballPlayers[] {
    if (!search.trim()) {
      return footballPlayer;
    }
    return footballPlayer.filter(footballPlayer => {
      if (footballPlayer.club.toLowerCase().includes(search.toLowerCase())) {
        return footballPlayer.club.toLowerCase().includes(search.toLowerCase());
      }
      if (footballPlayer.country.toLowerCase().includes(search.toLowerCase())) {
        return footballPlayer.country.toLowerCase().includes(search.toLowerCase())
      }
    })
  }

}
