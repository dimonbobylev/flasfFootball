export class FootballPlayers
{
  name: string;
  club: string;
  gameNumber: number;
  position: string;
  statistics: number;


  constructor(name, club, gameNumber, position, statistics)
  {
    this.name = name;
    this.club = club;
    this.gameNumber = gameNumber;
    this.position = position;
    this.statistics = statistics;
  }
}
