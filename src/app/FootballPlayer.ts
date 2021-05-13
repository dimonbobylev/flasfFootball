export class FootballPlayers
{
  name: string;
  club: string;
  country: string;
  number: number;
  position: string;
  statistics: number;


  constructor(name, club, country, number, position, statistics)
  {
    this.name = name;
    this.club = club;
    this.country = country;
    this.number = number;
    this.position = position;
    this.statistics = statistics;
  }
}
