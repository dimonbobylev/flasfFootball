export class FootballPlayers
{
  id: number;
  name: string;
  club: string;
  country: string;
  age: number;
  position: string;
  millions: number;


  constructor(id,name, club, country, age, position, millions)
  {
    this.id = id;
    this.name = name;
    this.club = club;
    this.country = country;
    this.age = age;
    this.position = position;
    this.millions = millions;
  }
}
