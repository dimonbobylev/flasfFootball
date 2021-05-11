export class FootballPlayers
{
  name: string;
  club: string;
  number: number;
  position: string;
  statistics: number;


  constructor(name, club, number, position, statistics)
  {
    this.name = name;
    this.club = club;
    this.number = number;
    this.position = position;
    this.statistics = statistics;
  }
}
