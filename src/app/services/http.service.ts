import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  API_URL = 'https://restcountries.com/v2/';

  constructor(private httpClient: HttpClient) {}

  async getCountries(): Promise<any> {
    return await lastValueFrom(
      this.httpClient.get<any>(`${this.API_URL}/all`)
    ).catch((err) => {
      this.error(err);
    });
  }

  async getCountryById(countryCode: string): Promise<any> {
    return await lastValueFrom(
      this.httpClient.get<any>(`${this.API_URL}/alpha/${countryCode}`)
    ).catch((err) => {
      this.error(err);
    });
  }

  error(err: any) {
    alert(err);
    console.log(
      '%cPromise rejected with',
      'background-color: red; color: white; border-radius: 2px; padding: 2px',
      JSON.stringify(err)
    );
  }
}
