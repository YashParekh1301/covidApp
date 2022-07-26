import { render } from "@testing-library/react";
import CountriesData from "./CountriesData";

const testCountriesData = [
  {
    "ID": "12d4fa85-ee64-4858-a6b0-46b2cc6dc343",
    "Country": "Afghanistan",
    "CountryCode": "AF",
    "Slug": "afghanistan",
    "NewConfirmed": 113,
    "TotalConfirmed": 184473,
    "NewDeaths": 0,
    "TotalDeaths": 7738,
    "NewRecovered": 0,
    "TotalRecovered": 0
  },
  {
    "ID": "6862e48a-99d6-4e20-9e18-62a7111d1257",
    "Country": "Albania",
    "CountryCode": "AL",
    "Slug": "albania",
    "NewConfirmed": 0,
    "TotalConfirmed": 293917,
    "NewDeaths": 0,
    "TotalDeaths": 3517,
    "NewRecovered": 0,
    "TotalRecovered": 0
  },
  {
    "ID": "e820bfed-3d6e-4324-9cd7-d2cf4fb0f072",
    "Country": "Andorra",
    "CountryCode": "AD",
    "Slug": "andorra",
    "NewConfirmed": 0,
    "TotalConfirmed": 45326,
    "NewDeaths": 0,
    "TotalDeaths": 153,
    "NewRecovered": 0,
    "TotalRecovered": 0,
  }
]


test("component rendered", () => {
  // render the component on virtual dom
  render(<CountriesData globalData={testGlobalData} />);
    
  //select the elements you want to interact with
  expect(document.getElementsByClassName("global-data-container").length).toBe(1);
    
});

test("component renders cards", () => {
  render(<GlobalData globalData={testGlobalData} />);
    
  //select the elements you want to interact with
  expect(document.getElementsByClassName("global-data-cards").length).toBe(3);
})