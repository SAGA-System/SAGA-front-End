import { DataPage } from './../../global/data-page';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-ptds',
  templateUrl: './ptds.component.html',
  styleUrls: ['./ptds.component.scss']
})
export class PtdsComponent implements OnInit {

  isMobile: boolean = DataPage.isMobileDefault;
  isTablet: boolean = DataPage.isMobileDefault;

  @HostListener(DataPage.eventResize, DataPage.eventResizeOptions)
  onResize() {
    this.isMobile = DataPage.isMobile();
    this.isTablet = DataPage.isTablet();
  }

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
    this.onResize();
  }

  dummyClick() {
    //click
  }

}
