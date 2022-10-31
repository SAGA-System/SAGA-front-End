export class DataPage {

  public static isMobileDefault: boolean = false;
  public static eventResize: string = 'window:resize';
  public static eventResizeOptions = ['$event'];

  public static isMobile(): boolean {
    return screen.width < 580;
  }

  public static isMobileOrTablet(): boolean {
    return (screen.width <= 768 || screen.height <= 500);
  }

  public static isTablet(): boolean {
    return (screen.width <= 768 && screen.width >= 580);
  }

  public static isPopupFullScreen(): boolean {
    return (screen.width <= 1024);
  }

  public static isDesktop(): boolean {
    return (screen.width >= 1024);
  }

  public static getScreenSize(): {width: number, height: number} {
    return {
      width: screen.width,
      height: screen.height
    };
  }

  static getMaxHeightScreen(valueToReduce: number = 0.3): number{
    let value = window.innerHeight - (window.innerHeight * valueToReduce)
    return value;
  }

  static getMaxHeightScreenInPx(): any{
    let value: number = DataPage.getMaxHeightScreen();
    return `${value}px`;
  }

}
