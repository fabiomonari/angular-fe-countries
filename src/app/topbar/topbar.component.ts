import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  @Input() isDarkModeOn = true;
  @Output() changeModeEvent = new EventEmitter<boolean>();

  changeMode() {
    this.isDarkModeOn = !this.isDarkModeOn;
    this.changeModeEvent.emit(this.isDarkModeOn);
  }
}
