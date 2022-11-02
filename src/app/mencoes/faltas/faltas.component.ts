import { Component, HostListener, OnInit } from '@angular/core';
import { DataPage } from 'src/app/global/data-page';

@Component({
  selector: 'app-faltas',
  templateUrl: './faltas.component.html',
  styleUrls: ['./faltas.component.scss']
})
export class FaltasComponent implements OnInit {

  isMobile: boolean = DataPage.isMobileDefault;
  isTablet: boolean = DataPage.isMobileDefault;

  @HostListener(DataPage.eventResize, DataPage.eventResizeOptions)
  onResize() {
    this.isMobile = DataPage.isMobile();
    this.isTablet = DataPage.isTablet();
  }

  constructor() { }

  ngOnInit(): void {
    this.onResize();
  }

  dummyClick() {
    //click
  }

  dummyData?: Array<any> = [
    {
      materia: 'Matéria Bacana',
      carga: '80',
      aulas: '49',
      faltas: '13',
      permitidas: '30',
      atual: '75%',
      total: '80%'
    },
    {
      materia: 'Matéria Bacana',
      carga: '80',
      aulas: '49',
      faltas: '13',
      permitidas: '30',
      atual: '75%',
      total: '80%'
    },
    {
      materia: 'Matéria Bacana',
      carga: '80',
      aulas: '49',
      faltas: '13',
      permitidas: '30',
      atual: '75%',
      total: '80%'
    },
    {
      materia: 'Matéria Bacana',
      carga: '80',
      aulas: '49',
      faltas: '13',
      permitidas: '30',
      atual: '75%',
      total: '80%'
    },
    {
      materia: 'Matéria Bacana',
      carga: '80',
      aulas: '49',
      faltas: '13',
      permitidas: '30',
      atual: '75%',
      total: '80%'
    },
    {
      materia: 'Matéria Bacana',
      carga: '80',
      aulas: '49',
      faltas: '13',
      permitidas: '30',
      atual: '75%',
      total: '80%'
    },
    {
      materia: 'Matéria Bacana',
      carga: '80',
      aulas: '49',
      faltas: '13',
      permitidas: '30',
      atual: '75%',
      total: '80%'
    },
    {
      materia: 'Matéria Bacana',
      carga: '80',
      aulas: '49',
      faltas: '13',
      permitidas: '30',
      atual: '75%',
      total: '80%'
    },
    {
      materia: 'Matéria Bacana',
      carga: '80',
      aulas: '49',
      faltas: '13',
      permitidas: '30',
      atual: '75%',
      total: '80%'
    },
    {
      materia: 'Matéria Bacana',
      carga: '80',
      aulas: '49',
      faltas: '13',
      permitidas: '30',
      atual: '75%',
      total: '80%'
    },
    {
      materia: 'Matéria Bacana',
      carga: '80',
      aulas: '49',
      faltas: '13',
      permitidas: '30',
      atual: '75%',
      total: '80%'
    },
    {
      materia: 'Matéria Bacana',
      carga: '80',
      aulas: '49',
      faltas: '13',
      permitidas: '30',
      atual: '75%',
      total: '80%'
    },

  ];

  dummyDataSituation?: Array<any> = [
    {
      situacao: 'PROMOVIDO '
    },
  ];

  seriesDummy: string[] = [
    '1º EM',
    '2º EM',
    '3º EM',
  ];

  dummyChartData: Array<any> = [
  {
    bimestre: '1º BIM',
    faltas: 18,
  }, {
    bimestre: '2º BIM',
    faltas: 28,
  }, {
    bimestre: '3º BIM',
    faltas: 6,
  }, {
    bimestre: '4º BIM',
    faltas: 37,
  }];

  dummyChartPieData: Array<any> = [{
    tipo: 'PRESENÇA',
    percent: 75.0,
  }, {
    tipo: 'FALTAS',
    percent: 25.0,
  }];

  customizeLabel(point: any) {
    return `${point.argumentText}: ${point.valueText}%`;
  }

  customizeTooltip(arg: any) {
    return `${arg.valueText}`;
  }


}
