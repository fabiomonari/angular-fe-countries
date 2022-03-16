import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  API_URL = 'https://restcountries.com/v2/all';

  constructor(private _httpClient: HttpClient) {}

  async getCountries(): Promise<any> {
    return await lastValueFrom(this._httpClient.get<any>(this.API_URL));
  }

  // async getCountries(): Promise<any> {
  //   await lastValueFrom(this._httpClient.get(this.API_URL));

  // .catch((err) => {
  //   this._snackBar.open('Erro loading data', 'OK', {
  //     verticalPosition: 'top',
  //     horizontalPosition: 'right',
  //     panelClass: 'snackbar-error',
  //   });
  //   console.log(
  //     '%cPromise rejected with',
  //     'background-color: red; color: white; border-radius: 2px; padding: 2px',
  //     JSON.stringify(err)
  //   );
  // });
  // }
}
