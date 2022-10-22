import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ptds',
  templateUrl: './ptds.component.html',
  styleUrls: ['./ptds.component.scss']
})
export class PtdsComponent implements OnInit {

  dummyData?: Array<any> = [
    {
      materia: 'Materia Bacana'
    },
    {
      materia: 'Materia Bacana'
    },
    {
      materia: 'Materia Bacana'
    },
    {
      materia: 'Materia Bacana'
    },
    {
      materia: 'Materia Bacana'
    },
    {
      materia: 'Materia Bacana'
    },
    {
      materia: 'Materia Bacana'
    },
    {
      materia: 'Materia Bacana'
    },
    {
      materia: 'Materia Bacana'
    },
    {
      materia: 'Materia Bacana'
    },
    {
      materia: 'Materia Bacana'
    },
    {
      materia: 'Materia Bacana'
    },
    {
      materia: 'Materia Bacana'
    },
    {
      materia: 'Materia Bacana'
    },
  ];

  dummySelectBox: string[] = [
    '1º EM',
    '2º EM',
    '3º EM',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  dummyClick() {
    //click
  }

}
