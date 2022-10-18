import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-professores-detail',
  templateUrl: './professores-detail.component.html',
  styleUrls: ['./professores-detail.component.scss']
})
export class ProfessoresDetailComponent implements OnInit {
  @Input() openPopupUnificacao: boolean = false;
  @Output() closePopupUnificacao = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.closePopupUnificacao.emit(false);
  }

}
