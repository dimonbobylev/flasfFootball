export class FootballCountriesTop
{
  id: number;
  country: string;
  r2017: number;
  r2021: number;
  total: number;


  constructor(id, country, r2017, r2021, total)
  {
    this.id = id;
    this.country = country;
    this.r2017 = r2017;
    this.r2021 = r2021;
    this.total = total;
  }
}
