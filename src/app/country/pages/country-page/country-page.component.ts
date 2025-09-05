import {  Component, computed, inject, OnInit, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.inteface';
import { DecimalPipe, Location } from '@angular/common';
@Component({
  selector: 'app-country-page',
  imports: [DecimalPipe],
  templateUrl: './country-page.component.html',

})
export class CountryPageComponent implements OnInit{

  location = inject(Location);

  goBack() {
    this.location.back();
  }


  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);

  country:Country | null = null;

  currentYear = computed(()=> {
    return new Date().getFullYear();
  })


  ngOnInit(): void {
  this.countryService.searchByCountryByAlphaCode(this.countryCode).subscribe({
    next: (country) => {
      this.country = country ?? null;
    },
    error: (err) => {
      this.country = null;
      console.log(err);
    }
  })
  }
}
