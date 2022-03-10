import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  API_URL = 'https://restcountries.com/v2/all';
  countries: any = [];
  regions: string[] = [
    'all',
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
  ];
  selectedRegion = 'all';
  searchText = '';

  constructor(
    private _httpClient: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getCountries();
  }

  async getCountries(): Promise<any> {
    await lastValueFrom(this._httpClient.get(this.API_URL))
      .then((data) => {
        this.countries = data;
      })
      .catch((err) => {
        this._snackBar.open('Erro loading data', 'OK', {
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: 'snackbar-error',
        });
        console.log(
          '%cPromise rejected with',
          'background-color: red; color: white; border-radius: 2px; padding: 2px',
          JSON.stringify(err)
        );
      });
  }
}
