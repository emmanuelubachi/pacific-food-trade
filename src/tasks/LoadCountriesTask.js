import countries from "@/data/countries.json";

class LoadCountriesTask {
  setState = null;
  mapCountries = countries.features;

  load = (setState, data) => {
    this.setState = setState;
    // this.#processData(data);
    console.log(data);
    //setState(countries.features);
    // (data) => {this.#processData(data)},
  };

  #processData = (countriesData) => {
    for (let i = 0; i < this.mapCountries.length; i++) {
      const mapCountries = this.mapCountries[i];
      // const countryData = countriesData.find(
      //   (country) => country.ExportISO === mapCountries.properties.ISO_A3
      // );

      mapCountries.properties.confirmed = 0;
      mapCountries.properties.confirmedText = "0";
    }

    this.setState(this.mapCountries);
  };
}

export default LoadCountriesTask;
