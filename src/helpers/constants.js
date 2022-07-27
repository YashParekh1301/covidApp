const BASE_URL = "localhost:3000";
const SET_COVID_DATA = "setCovidData";
const SET_IS_LOADING = "setIsLoading";
const tableColumns = [
  {
    id: "Country", label: "Country Name", align: "center"
  },
  {
    id: "NewConfirmed", label: "New Confirmed", align: "center"
  },
  {
    id: "TotalConfirmed", label: "Total Confirmed", align: "center"
  },
  {
    id: "NewDeaths", label: "New Deaths", align: "center"
  },
  {
    id: "TotalDeaths", label: "Total Deaths", align: "center"
  },
  {
    id: "NewRecovered", label: "New Recovered", align: "center"
  },
  {
    id: "TotalRecovered", label: "Total Recovered", align: "center"
  }
]

const tableHeaders = [
  {
    id: "Country", label: "Country", colspan: 1
  },
  {
    id: "ConfirmedCases", label: "Confirmed Cases", colspan: 2
  },
  {
    id: "DeathCases", label: "Death Cases", colspan: 2
  },
  {
    id: "RecoveredCases", label: "Recovered Cases", colspan: 2
  }
]

const debounceTimer = 300;
export {
  BASE_URL,
  SET_COVID_DATA,
  SET_IS_LOADING,
  tableColumns,
  tableHeaders,
  debounceTimer
}