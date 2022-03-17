import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  country: any = [];
  isReady = false;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.httpService
      .getCountry(this.route.snapshot.params['id'])
      .then((data) => {
        this.country = data;
        this.isReady = true;
      });
  }
}
