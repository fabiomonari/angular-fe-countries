import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  @Input() isDarkModeOn = false;
  @Output() changeModeEvent = new EventEmitter<boolean>();

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.isDarkModeOn =
      this.cookieService.get('darkMode') === 'true' ? true : false;
    this.changeModeEvent.emit(this.isDarkModeOn);
  }

  changeMode(): void {
    this.isDarkModeOn = !this.isDarkModeOn;
    this.cookieService.set('darkMode', this.isDarkModeOn ? 'true' : 'false');
    this.changeModeEvent.emit(this.isDarkModeOn);
  }
}
