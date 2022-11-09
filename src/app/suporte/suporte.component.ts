import { DataPage } from './../global/data-page';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.scss']
})
export class SuporteComponent implements OnInit {

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

}
