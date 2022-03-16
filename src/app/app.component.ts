import { Component, HostBinding, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostBinding('class.dark') isDarkModeOn = true;

  constructor() {}

  ngOnInit() {}

  changeMode() {
    this.isDarkModeOn = !this.isDarkModeOn;
  }
}
