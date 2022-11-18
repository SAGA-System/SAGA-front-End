import { userItems } from './header-data';
import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';
import { DataPage } from '../global/data-page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  isMobile: boolean = DataPage.isMobileDefault;
  isTablet: boolean = DataPage.isMobileDefault;

  @HostListener(DataPage.eventResize, DataPage.eventResizeOptions)
  onResize() {
    this.isMobile = DataPage.isMobile();
    this.isTablet = DataPage.isTablet();
  }

  canShowSearchAsOverlay = false; //temporary

  userItems = userItems;

  dateTime = new Date();

  textTime: string = '';
  nameUser: string = 'Enzo'; //dummyText

  private $inActive = new Subject<boolean>()

  constructor() {}

  ngOnDestroy(): void {
    this.$inActive.next(true);
    this.$inActive.unsubscribe;
  }

  ngOnInit(): void {
    this.onResize();
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.startClock();
  }

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void{
    if(innerWidth < 845){
      this.canShowSearchAsOverlay = true;
    }else{
      this.canShowSearchAsOverlay = false;
    }
  }

  startClock(){
    interval(1).pipe(takeUntil(this.$inActive)).subscribe(data =>{
      this.dateTime = new Date();
    });
  }

  getHourClass(): string {
    let hourStyle

    if(Number(new Date().getHours()) >= 6 && Number(new Date().getHours()) <= 18) {
        hourStyle = 'day  fas fa-sun sun'
        this.textTime = 'Bom Dia'
      } else {
        hourStyle = 'night fas fa-moon';
        this.textTime = 'Boa noite'
      }
      return hourStyle;
  }
}
