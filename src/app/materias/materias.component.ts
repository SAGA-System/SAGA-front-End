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

  constructor() { }

  ngOnInit(): void {
  }

  teste(): string{
    let styleClass = '';

    if(this.dummyData.turma_id = 1){
      styleClass = 'turma-a';
    }else if(this.dummyData.turma_id = 2){
      styleClass = 'turma-b'
    }else{
      styleClass = 'todos'
    }
    return styleClass;
  }

}
