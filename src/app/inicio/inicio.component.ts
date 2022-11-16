import { Component, HostListener, OnInit } from '@angular/core';
import { DataPage } from '../global/data-page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class inicioComponent implements OnInit {

  isMobile: boolean = DataPage.isMobileDefault;
  isTablet: boolean = DataPage.isMobileDefault;

  @HostListener(DataPage.eventResize, DataPage.eventResizeOptions)
  onResize() {
    this.isMobile = DataPage.isMobile();
    this.isTablet = DataPage.isTablet();
  }

  dummyData?: Array<any> = [
    {
      messages: 'mensagem bacana',
      date: '21/01/21',
      Hour: '00:00'
    },
    {
      messages: 'mensagem bacana',
      date: '21/01/21',
      Hour: '00:00'
    },
    {
      messages: 'mensagem bacana',
      date: '21/01/21',
      Hour: '00:00'
    },
    {
      messages: 'mensagem bacana',
      date: '21/01/21',
      Hour: '00:00'
    },
    {
      messages: 'mensagem bacana',
      date: '21/01/21',
      Hour: '00:00'
    },
    {
      messages: 'mensagem bacana',
      date: '21/01/21',
      Hour: '00:00'
    },
    {
      messages: 'mensagem bacana',
      date: '21/01/21',
      Hour: '00:00'
    },
    {
      messages: 'mensagem bacana',
      date: '21/01/21',
      Hour: '00:00'
    },
    {
      messages: 'mensagem bacana',
      date: '21/01/21',
      Hour: '00:00'
    },
    {
      messages: 'mensagem bacana',
      date: '21/01/21',
      Hour: '00:00'
    },
    {
      messages: 'mensagem bacana',
      date: '21/01/21',
      Hour: '00:00'
    },

  ];

  dummyNews?: Array<any> = [
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
    {
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae pharetra dui. Morbi rutrum dolor enim, ac congue dolor posuere at. Nullam metus mauris, vestibulum in neque sit amet, molestie luctus lorem. Donec aliquam convallis quam, in euismod quam feugiat suscipit. Cras interdum, purus ut sagittis vulputate, felis ante iaculis magna, in lacinia sem risus vitae leo. Maecenas quis orci quis lacus efficitur sagittis vitae vitae nulla. Vestibulum pellentesque volutpat massa a maximus.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.onResize();
  }

}
