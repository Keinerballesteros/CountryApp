import type { Country } from "../interfaces/country.inteface";
import type { RESTCountry } from "../interfaces/rest-countries.inteface";

export class CountryMapper {

  static mapRestCountryToCountry(restCountry:RESTCountry): Country{
    return {
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No Spanish Name',
      capital: restCountry.capital?.join(','),
      population: restCountry.population,
      region: restCountry.region,
      subregion: restCountry.subregion
    };
  }

  static mapRestCountryArrayToCountryArray(restCountries: RESTCountry[]):Country[]{
    return restCountries.map(this.mapRestCountryToCountry);
  }
}
