import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "../Table/Table";
import RefreshIcon from "@mui/icons-material/Refresh";
import { CountriesDataWrapper,
  CountriesDataHeader,
  CountriesDataHeaderText,
  CountriesDataHeaderTop,
  CountriesDataHeaderBottom,
  StyledRefreshIcon
} from "./CountriesData.styles";
import SearchInput from "../SearchInput/SearchInput";
import { sort } from "../../helpers";
import Filters from "../Filters/Filters";

const CountriesData = (props) => {
    
  const {handleRefresh, isLoading} = props;
  const covidData = useSelector((state) => state.covidData); 
  // const isLoading = useSelector((state) => state.isLoading); 
  const [ tableRows, setTableRows ] = useState([]);
  const [sortedBy, setSortedBy] = useState("");
  const [sortingOrder, setSortingOrder] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filtersData, setFiltersData] = useState({});

  useEffect(() => {
    setTableRows(covidData?.Countries || [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [covidData])

  const applySearch = (searchVal) => {
    let countriesData = covidData.Countries;
    countriesData = countriesData.filter((countryData) => {
      return (countryData.Country).toLowerCase().includes(searchVal) || 
        (countryData.CountryCode).toLowerCase().includes(searchVal);
    })
    return countriesData;
  }

  const applyFilters = (list, filterData) => {
    const {filterColumnId, filterComparator, filterValue} = filterData;
    let countriesData = list;
    if(filterComparator && filterColumnId && filterValue !== "") {
      if(filterComparator === "lt") {
        countriesData = list.filter((item) => {
          return item[`${filterColumnId}`] < filterValue
        })
      }
      else {
        countriesData = list.filter((item) => {
          return item[`${filterColumnId}`] > filterValue
        })
      }
    }
    return countriesData;
  }

  const handleSearchInput = (searchVal) => {
    let countriesData = applySearch(searchVal);
    countriesData = applyFilters(countriesData, filtersData)
    countriesData = sort(countriesData, sortedBy, sortingOrder)
    setSearchValue(searchVal);
    setTableRows(countriesData);
  }

  const handleTableHeaderClick = (columnId) => {

    let countriesData = applySearch(searchValue);
    countriesData = applyFilters(countriesData, filtersData)
    let sortedData = [];
    if(sortedBy === columnId) {
      if(sortingOrder === "ASC") {
        sortedData = sort(countriesData, columnId, "DESC")
        setSortingOrder("DESC");
      }
      else if(sortingOrder === "DESC") {
        sortedData = countriesData;
        setSortingOrder("");
        setSortedBy("");
      }
      else {
        sortedData = sort(countriesData, columnId, "ASC");
        setSortingOrder("ASC")
      }
    }
    else {
      sortedData = sort(countriesData, columnId, "ASC")
      setSortingOrder("ASC")
    }
      
    setTableRows(sortedData);
    setSortedBy(columnId);
  }


  const handleFilterApply = (filterData) => {
    let countriesData = applySearch(searchValue);
    countriesData = applyFilters(countriesData, filterData);
    countriesData = sort(countriesData, sortedBy, sortingOrder)
    setFiltersData(filterData);
    setTableRows(countriesData)
  }

  const handleRefreshClick = () => {
    handleRefresh();
  }
  return (
    <CountriesDataWrapper id='country-wise-data'>
      <CountriesDataHeader>
        <CountriesDataHeaderTop>
          <CountriesDataHeaderText>
                Covid Data by Country
            <StyledRefreshIcon onClick={handleRefreshClick}><RefreshIcon /></StyledRefreshIcon>
          </CountriesDataHeaderText>
          <SearchInput handleChange={handleSearchInput}/>
        </CountriesDataHeaderTop>
        <CountriesDataHeaderBottom>
          <Filters applyFilters={handleFilterApply}/>
        </CountriesDataHeaderBottom>
      </CountriesDataHeader>
      <Table tableRows={tableRows} sortData={{sortedBy, sortingOrder}} handleTableHeaderClick={handleTableHeaderClick} isLoading={isLoading}/>
    </CountriesDataWrapper>
  )
}

export default CountriesData