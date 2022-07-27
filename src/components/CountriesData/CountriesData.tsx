import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RefreshIcon from "@mui/icons-material/Refresh";
import { CountriesDataWrapper,
  CountriesDataHeader,
  CountriesDataHeaderText,
  CountriesDataHeaderTop,
  CountriesDataHeaderBottom,
  StyledRefreshIcon
} from "./CountriesData.styles";
import { ICountryConfig, ICovidConfig, IFilterData, IStore } from "../../interfaces";
import Table from "../Table/Table";
import SearchInput from "../SearchInput/SearchInput";
import { sort } from "../../helpers";
import Filters from "../Filters/Filters";
import { sortOrder } from "../../helpers/constants";

type IProps = {
  handleRefresh: () => void;
  isLoading: boolean;
}

const CountriesData = (props: IProps) => {
    
  const {handleRefresh, isLoading} = props;
  const covidData: ICovidConfig = useSelector((state: IStore) => state.covidData); 
  // const isLoading = useSelector((state) => state.isLoading); 
  const [ tableRows, setTableRows ] = useState<ICountryConfig[]>([]);
  const [sortedBy, setSortedBy] = useState<string>("");
  const [sortingOrder, setSortingOrder] = useState<sortOrder>(sortOrder.NONE);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filtersData, setFiltersData] = useState<IFilterData>({});

  useEffect(() => {
    setTableRows(covidData?.Countries || [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [covidData])

  const applySearch = (searchVal: string) => {
    let countriesData = covidData.Countries;
    countriesData = countriesData.filter((countryData) => {
      return (countryData.Country).toLowerCase().includes(searchVal) || 
        (countryData.CountryCode).toLowerCase().includes(searchVal);
    })
    return countriesData;
  }

  const applyFilters = (list: ICountryConfig[], filterData: IFilterData) => {
    const {filterColumnId, filterComparator, filterValue} = filterData;
    let countriesData = list;
    if(filterComparator && filterColumnId && filterValue !== undefined) {
      if(filterComparator === "lt") {
        countriesData = list.filter((item) => {
          return item[`${filterColumnId}` as keyof ICountryConfig] < filterValue
        })
      }
      else {
        countriesData = list.filter((item) => {
          return item[`${filterColumnId}` as keyof ICountryConfig] > filterValue
        })
      }
    }
    return countriesData;
  }

  const handleSearchInput = (searchVal: string) => {
    let countriesData = applySearch(searchVal);
    countriesData = applyFilters(countriesData, filtersData)
    countriesData = sort(countriesData, sortedBy, sortingOrder)
    setSearchValue(searchVal);
    setTableRows(countriesData);
  }

  const handleTableHeaderClick = (columnId: string) => {

    let countriesData = applySearch(searchValue);
    countriesData = applyFilters(countriesData, filtersData)
    let sortedData = [];
    if(sortedBy === columnId) {
      if(sortingOrder === sortOrder.ASC) {
        sortedData = sort(countriesData, columnId, "DESC")
        setSortingOrder(sortOrder.DESC);
      }
      else if(sortingOrder === sortOrder.DESC) {
        sortedData = countriesData;
        setSortingOrder(sortOrder.NONE);
        setSortedBy("");
      }
      else {
        sortedData = sort(countriesData, columnId, sortOrder.ASC);
        setSortingOrder(sortOrder.ASC)
      }
    }
    else {
      sortedData = sort(countriesData, columnId, sortOrder.ASC)
      setSortingOrder(sortOrder.ASC)
    }
      
    setTableRows(sortedData);
    setSortedBy(columnId);
  }


  const handleFilterApply = (filterData: IFilterData) => {
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