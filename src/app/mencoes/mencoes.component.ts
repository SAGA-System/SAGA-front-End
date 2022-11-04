import { Component, HostListener, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { DataPage } from '../global/data-page';

@Component({
  selector: 'app-mencoes',
  templateUrl: './mencoes.component.html',
  styleUrls: ['./mencoes.component.scss']
})
export class mencoesComponent implements OnInit {

  isMobile: boolean = DataPage.isMobileDefault;
  isTablet: boolean = DataPage.isMobileDefault;

  @HostListener(DataPage.eventResize, DataPage.eventResizeOptions)
  onResize() {
    this.isMobile = DataPage.isMobile();
    this.isTablet = DataPage.isTablet();
  }

  dummyClick() {
    //click
  }

  public chart: any;

  dummyData?: Array<any> = [
    {
      materia: 'Matéria Bacana',
      primeiro: 'MB',
      segundo: 'B',
      terceiro: 'R',
      quarto: 'I',
      final: 'MB',
      conselho: 'B',
      aulas: '117',
      faltas: '12'
    },
    {
      materia: 'Matéria Bacana',
      primeiro: 'MB',
      segundo: 'B',
      terceiro: 'R',
      quarto: 'I',
      final: 'MB',
      conselho: 'B',
      aulas: '117',
      faltas: '12'
    },
    {
      materia: 'Matéria Bacana',
      primeiro: 'MB',
      segundo: 'B',
      terceiro: 'R',
      quarto: 'I',
      final: 'MB',
      conselho: 'B',
      aulas: '117',
      faltas: '12'
    },
    {
      materia: 'Matéria Bacana',
      primeiro: 'MB',
      segundo: 'B',
      terceiro: 'R',
      quarto: 'I',
      final: 'MB',
      conselho: 'B',
      aulas: '117',
      faltas: '12'
    },
    {
      materia: 'Matéria Bacana',
      primeiro: 'MB',
      segundo: 'B',
      terceiro: 'R',
      quarto: 'I',
      final: 'MB',
      conselho: 'B',
      aulas: '117',
      faltas: '12'
    },
    {
      materia: 'Matéria Bacana',
      primeiro: 'MB',
      segundo: 'B',
      terceiro: 'R',
      quarto: 'I',
      final: 'MB',
      conselho: 'B',
      aulas: '117',
      faltas: '12'
    },
    {
      materia: 'Matéria Bacana',
      primeiro: 'MB',
      segundo: 'B',
      terceiro: 'R',
      quarto: 'I',
      final: 'MB',
      conselho: 'B',
      aulas: '117',
      faltas: '12'
    },
    {
      materia: 'Matéria Bacana',
      primeiro: 'MB',
      segundo: 'B',
      terceiro: 'R',
      quarto: 'I',
      final: 'MB',
      conselho: 'B',
      aulas: '117',
      faltas: '12'
    },
    {
      materia: 'Matéria Bacana',
      primeiro: 'MB',
      segundo: 'B',
      terceiro: 'R',
      quarto: 'I',
      final: 'MB',
      conselho: 'B',
      aulas: '117',
      faltas: '12'
    },
    {
      materia: 'Matéria Bacana',
      primeiro: 'MB',
      segundo: 'B',
      terceiro: 'R',
      quarto: 'I',
      final: 'MB',
      conselho: 'B',
      aulas: '117',
      faltas: '12'
    },
    {
      materia: 'Matéria Bacana',
      primeiro: 'MB',
      segundo: 'B',
      terceiro: 'R',
      quarto: 'I',
      final: 'MB',
      conselho: 'B',
      aulas: '117',
      faltas: '12'
    },
    {
      materia: 'Matéria Bacana',
      primeiro: 'MB',
      segundo: 'B',
      terceiro: 'R',
      quarto: 'I',
      final: 'MB',
      conselho: 'B',
      aulas: '117',
      faltas: '12'
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


  data = {
    labels: ["1º BIM.", "2º BIM.", "3º BIM.", "4º BIM."],
    datasets: [
      // o primeiro objeto é apenas para exibir todas as opções, por isso o data dele é 3 e 0, pois são os extremos do gráfico,
      // ent independente do valor da linha de baixo, ele vai mostrar todas as opções
      {
        label: '',
        data: [3, 0, 3, 0],
        borderColor: '#0000', // para remover a cor da linha
        pointBorderColor: '#0000', // para remover a cor da borda da bolinha
        pointBackgroundColor: '#0000', // para remover a cor da bolinha em si
        fill: false,
      },
      {
        data: [1.0, 0.3, 2.2, 1.5],
        borderColor: '#4E67F3',
        fill: true,
        tension: 0.4
      },
    ]
  };

  config: any = {
    type: 'line',
    data: this.data,
    options: {
      events: [], // para desabilitar o hover quando passa por algum item do grafico
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false // para desabilitar as legendas
        },
        title: {
          display: true,
          text: 'GRÁFICO DE DESEMPENHO' // título do gráfico
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true
        },
        y: {
          display: true,
          title: {
            display: false,
            text: 'Notas' // texto do eixo y
          },
          ticks: { // função que permite passar strings para o eixo y
            beginAtZero: true,
            stepSize: 1, // escala para alinhamento, ent se o data for 1.5, ficará entre I e R a nota
            callback: function (value: any) {
              var x = ["I", "R", "B", "MB"]; // textos para o eixo y
              return x[value | 0];
            }
          }
        }
      }
    },
  };

  createChart() {
    this.chart = new Chart("MyChart", this.config)
  }

  constructor() { }

  ngOnInit(): void {
    this.createChart();
    this.onResize();
  }

}
