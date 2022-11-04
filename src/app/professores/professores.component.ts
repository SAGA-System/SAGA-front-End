import { Component, HostListener, OnInit } from '@angular/core';
import { DataPage } from '../global/data-page';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  isMobile: boolean = DataPage.isMobileDefault;
  isTablet: boolean = DataPage.isMobileDefault;

  @HostListener(DataPage.eventResize, DataPage.eventResizeOptions)
  onResize() {
    this.isMobile = DataPage.isMobile();
    this.isTablet = DataPage.isTablet();
  }

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
    this.onResize();
  }

  dummyClick() {
    //click
  }

  openDetail(){
    this.openPopupUnificacao = true
  }

}
