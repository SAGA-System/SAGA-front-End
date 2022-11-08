import { Component, HostListener, OnInit } from '@angular/core';
import { DataPage } from '../global/data-page';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent implements OnInit {

  isMobile: boolean = DataPage.isMobileDefault;
  isTablet: boolean = DataPage.isMobileDefault;

  @HostListener(DataPage.eventResize, DataPage.eventResizeOptions)
  onResize() {
    this.isMobile = DataPage.isMobile();
    this.isTablet = DataPage.isTablet();
  }

  dummyData: any = [
    {
      teste: 'Aula Bacana',
      turma_id: 1
    },
    {
      teste: 'Aula Bacana',
      turma_id: 2
    },
    {
      teste: 'Aula Bacana',
      turma_id: 2
    },
    {
      teste: 'Aula Bacana',
      turma_id: 2
    },
    {
      teste: 'Aula Bacana',
      turma_id: 0
    },
    {
      teste: 'Aula Bacana',
      turma_id: 1
    },
  ]


  dummyDataMobile: any = [
    {
      teste: 'Segunda',
      primeira: 'aula 1',
      segunda: 'aula 2',
      terceira: 'aula 3',
      quarta: 'aula 4',
      quinta: 'aula 5',
      sexta: 'aula 6',
      turma_id: 1
    },
    {
      teste: 'Terça',
      primeira: 'aula 1',
      segunda: 'aula 2',
      terceira: 'aula 3',
      quarta: 'aula 4',
      quinta: 'aula 5',
      sexta: 'aula 6',
      turma_id: 2
    },
    {
      teste: 'Quarta',
      primeira: 'aula 1',
      segunda: 'aula 2',
      terceira: 'aula 3',
      quarta: 'aula 4',
      quinta: 'aula 5',
      sexta: 'aula 6',
      turma_id: 2
    },
    {
      teste: 'Quinta',
      primeira: 'aula 1',
      segunda: 'aula 2',
      terceira: 'aula 3',
      quarta: 'aula 4',
      quinta: 'aula 5',
      sexta: 'aula 6',
      turma_id: 2
    },
    {
      teste: 'Sexta',
      primeira: 'aula 1',
      segunda: 'aula 2',
      terceira: 'aula 3',
      quarta: 'aula 4',
      quinta: 'aula 5',
      sexta: 'aula 6',
      turma_id: 0
    },
    {
      teste: 'Sábado',
      primeira: 'aula 1',
      segunda: 'aula 2',
      terceira: 'aula 3',
      quarta: 'aula 4',
      quinta: 'aula 5',
      sexta: 'aula 6',
      turma_id: 1
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.onResize();
  }

  colorTurma(turma_id: number): string{
    let styleClass = '';

    if(turma_id == 1){
      styleClass = 'turma-a';
    }else if(turma_id == 2){
      styleClass = 'turma-b'
    }else{
      styleClass = 'todos'
    }
    return styleClass;
  }

}
