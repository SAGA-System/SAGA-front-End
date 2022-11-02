import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { DataPage } from 'src/app/global/data-page';

@Component({
  selector: 'app-professores-detail',
  templateUrl: './professores-detail.component.html',
  styleUrls: ['./professores-detail.component.scss']
})
export class ProfessoresDetailComponent implements OnInit {
  @Input() openPopupUnificacao: boolean = false;
  @Output() closePopupUnificacao = new EventEmitter();

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

  close(): void {
    this.closePopupUnificacao.emit(false);
  }

}
