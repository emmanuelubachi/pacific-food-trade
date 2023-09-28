import countries from "@/data/countries.json";

class LoadCountriesTask {
  setState = null;
  mapCountries = countries.features;
  load = (setState) => {
    this.setState = setState;
    //setState(countries.features);
    // (data) => {this.#processData(data)},
  };

  #processData = (countriesData) => {
    for (let i = 0; i < this.mapCountries.length; i++) {
      const mapCountries = this.mapCountries[i];
    }
  };
}

export default LoadCountriesTask;
