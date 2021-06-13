import {ThemePalette} from '@angular/material/core';

export class ClubCheck
{
  name: string;
  completed: boolean;
  color: ThemePalette;


  constructor(name, completed, color)
  {
    this.name = name;
    this.completed = completed;
    this.color = color;
  }
}
