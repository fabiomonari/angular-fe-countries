import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  countries: any = [];
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  selectedRegion = '';
  searchText = '';

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getCountries().then((data) => {
      this.countries = data;
    });
  }

  selectRegion(region: string) {
    this.selectedRegion = region;
  }
}
