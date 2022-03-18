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
  countryBorders: any = [];
  isReady = false;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry() {
    this.httpService
      .getCountryById(this.route.snapshot.params['id'])
      .then((data) => {
        // getting country full data
        this.country = data;
        // getting country borders data
        if (data.borders) {
          data.borders.forEach((border: string) => {
            this.httpService.getCountryById(border).then((country) => {
              this.countryBorders.push({
                name: country.name,
                code: country.alpha3Code,
              });
            });
          });
        }
        this.isReady = true;
      });
  }

  async changeCountry(id: string) {
    this.isReady = false;
    await this.router.navigate(['/country', id.toLowerCase()]);
    this.getCountry();
  }
}
