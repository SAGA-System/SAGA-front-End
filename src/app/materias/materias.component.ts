import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent implements OnInit {

  employees: any = [
    {
    ID: 1,
    segunda: 'teste',
    terça: 'teste 2',
    quarta: 'teste 3.',
    quinta: 'teste 4',
    sexta: 'teste 5',
    },
    {
      ID: 2,
      segunda: 'teste 6',
      terça: 'teste 7 ',
      quarta: 'teste 8.',
      quinta: 'teste 9',
      sexta: 'teste 10',
      },

      {
        ID: 1,
        segunda: 'teste 11',
        terça: 'teste 12',
        quarta: 'teste 13.',
        quinta: 'teste 14',
        sexta: 'teste 15',
        },
        {
          ID: 2,
          segunda: 'teste 16',
          terça: 'teste 17',
          quarta: 'teste 18.',
          quinta: 'teste 19',
          sexta: 'teste 20',
          },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
