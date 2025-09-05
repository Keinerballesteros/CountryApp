import {  Component, inject, OnInit, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.inteface';
export type Region =
  | 'Africa'
  | 'Americas'
  | 'Asia'
  | 'Europe'
  | 'Oceania'
  | 'Antarctic';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',

})
export class ByRegionPageComponent{
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];
  countries = signal<Country[]>([])
  selectedRegion= signal<Region | null>(null);

  countryService = inject(CountryService);


  onRegionClick(region: Region): void {
    this.searchByRegion(region);
  }

  searchByRegion(region: Region): void {
    this.selectedRegion.set(region);

    this.countryService.searchByRegion(region).subscribe({
      next: (countries) => {
        this.countries.set(countries);
      },
      error: (err) => {
        this.countries.set([]);
        console.error('Error fetching countries:', err);
      }
    });
  }
}
