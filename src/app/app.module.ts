import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './components/common/select/select.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    SelectComponent,
    TopbarComponent,
    CountryDetailsComponent,
    CountriesListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
