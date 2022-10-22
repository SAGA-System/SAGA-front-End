import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
  {
    routeLink: 'inicio',
    icon: 'fal fa-home',
    label: 'Início'
  },
  {
    routeLink: 'mencoes',
    icon: 'fas fa-chart-line',
    label: 'Menções',
    expanded: false,
    items: [
      {
          routeLink: 'mencoes/boletim',
          label:'Boletim'
      },
      {
        routeLink: 'mencoes/faltas',
        label:'Faltas'
      }
    ]
  },
  {
    routeLink: 'professores',
    icon: 'fas fa-chalkboard-teacher',
    label: 'Professores'
  },
  {
    routeLink: 'materias',
    icon: 'fas fa-books',
    label: 'Matérias',
    expanded: false,
    items: [
      {
          routeLink: 'materias/grade',
          label:'Grade'
      },
      {
        routeLink: 'materias/ptds',
        label:'PTDs'
      }
    ]
  },
  {
    routeLink: 'suporte',
    icon: 'far fa-question-square',
    label: 'Suporte'
  }
];
