import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('class.dark') isDarkModeOn = true;

  showScrollButton = false;

  constructor() {}

  @ViewChild('main') element?: ElementRef;

  scrollCheck() {
    if (this.element) {
      if (this.element.nativeElement.scrollTop > 40) {
        this.showScrollButton = true;
      } else {
        this.showScrollButton = false;
      }
    }
  }

  scrollToTop() {
    if (this.element) {
      if (this.element.nativeElement.scrollTop > 0) {
        this.element.nativeElement.scrollTop = 0;
        this.showScrollButton = false;
      }
    }
  }
  changeMode() {
    this.isDarkModeOn = !this.isDarkModeOn;
  }
}
