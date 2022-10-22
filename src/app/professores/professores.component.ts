import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  public openPopupUnificacao: boolean = false;

  dummyData?: Array<any> = [
    {
      professor: 'Professor Bacana',
      email: 'professorbacana@email.com',
      materia: 'Materia Bacana'
    },
    {
      professor: 'Professor Bacana',
      email: 'professorbacana@email.com',
      materia: 'Materia Bacana'
    },
    {
      professor: 'Professor Bacana',
      email: 'professorbacana@email.com',
      materia: 'Materia Bacana'
    },
    {
      professor: 'Professor Bacana',
      email: 'professorbacana@email.com',
      materia: 'Materia Bacana'
    },
    {
      professor: 'Professor Bacana',
      email: 'professorbacana@email.com',
      materia: 'Materia Bacana'
    },
    {
      professor: 'Professor Bacana',
      email: 'professorbacana@email.com',
      materia: 'Materia Bacana'
    },
    {
      professor: 'Professor Bacana',
      email: 'professorbacana@email.com',
      materia: 'Materia Bacana'
    },

        {
      professor: 'Professor Bacana',
      email: 'professorbacana@email.com',
      materia: 'Materia Bacana'
    },
    {
      professor: 'Professor Bacana',
      email: 'professorbacana@email.com',
      materia: 'Materia Bacana'
    },
    {
      professor: 'Professor Bacana',
      email: 'professorbacana@email.com',
      materia: 'Materia Bacana'
    },
    {
      professor: 'Professor Bacana',
      email: 'professorbacana@email.com',
      materia: 'Materia Bacana'
    },
    {
      professor: 'Professor Bacana',
      email: 'professorbacana@email.com',
      materia: 'Materia Bacana'
    },
    {
      professor: 'Professor Bacana',
      email: 'professorbacana@email.com',
      materia: 'Materia Bacana'
    },
    {
      professor: 'Professor Bacana',
      email: 'professorbacana@email.com',
      materia: 'Materia Bacana'
    },
    {
      professor: 'Professor Bacana',
      email: 'professorbacana@email.com',
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

  openDetail(){
    this.openPopupUnificacao = true
  }

}
