export class FootballClubs
{
  id: number;
  club: string;
  country: string;
  r2021: number;
  total: number;


  constructor(id, club, country, r2021, total)
  {
    this.id = id;
    this.club = club;
    this.country = country;
    this.r2021 = r2021;
    this.total = total;
  }
}
