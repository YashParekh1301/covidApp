import { render, fireEvent, screen } from "@testing-library/react";
import GlobalData from "./GlobalData";

const testGlobalData = {
  "NewConfirmed": 932000,
  "TotalConfirmed": 567767517,
  "NewDeaths": 2606,
  "TotalDeaths": 6378500,
  "NewRecovered": 0,
  "TotalRecovered": 0,
}

test("component rendered", () => {
  // render the component on virtual dom
  render(<GlobalData globalData={testGlobalData} />);
    
  //select the elements you want to interact with
  expect(document.getElementsByClassName("global-data-container").length).toBe(1);
    
});

test("component renders cards", () => {
  render(<GlobalData globalData={testGlobalData} />);
    
  //select the elements you want to interact with
  expect(document.getElementsByClassName("global-data-cards").length).toBe(3);
})