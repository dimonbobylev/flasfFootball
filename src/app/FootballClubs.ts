export class FootballClubs
{
  id: number;
  club: string;
  country: string;
  rank: number;


  constructor(id, club, country, rank)
  {
    this.id = id;
    this.club = club;
    this.country = country;
    this.rank = rank;
  }
}
