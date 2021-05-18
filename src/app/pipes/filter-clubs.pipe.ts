import { Pipe, PipeTransform } from '@angular/core';
import {FootballClubs} from '../FootballClubs';

@Pipe({
  name: 'filterClubs'
})
export class FilterClubsPipe implements PipeTransform {

  transform(footballClub: FootballClubs[], search: string = ''): FootballClubs[] {
    if (!search.trim()) {
      return footballClub;
    }
    return footballClub.filter(footballClub => {
      if (footballClub.club.toLowerCase().includes(search.toLowerCase())) {
        return footballClub.club.toLowerCase().includes(search.toLowerCase());
      }
      if (footballClub.country.toLowerCase().includes(search.toLowerCase())) {
        return footballClub.country.toLowerCase().includes(search.toLowerCase())
      }
    })
  }

}
