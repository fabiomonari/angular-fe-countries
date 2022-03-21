import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showScrollButton = false;

  @HostBinding('class.dark') isDarkModeOn = false;
  @ViewChild('main') element?: ElementRef;

  scrollCheck(): void {
    if (this.element) {
      if (this.element.nativeElement.scrollTop > 40) {
        this.showScrollButton = true;
      } else {
        this.showScrollButton = false;
      }
    }
  }

  scrollToTop(): void {
    if (this.element) {
      if (this.element.nativeElement.scrollTop > 0) {
        this.element.nativeElement.scrollTop = 0;
        this.showScrollButton = false;
      }
    }
  }

  changeMode(event: boolean): void {
    this.isDarkModeOn = event;
  }
}
