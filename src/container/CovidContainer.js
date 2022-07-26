import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import CountriesData from "../components/CountriesData/CountriesData";
import GlobalData from "../components/GlobalData/GlobalData";
import Header from "../components/Header/Header";
import { SET_COVID_DATA } from "../helpers/constants";
import { getCovidData } from "../helpers/index";
import Wrapper from "./CovidContainer.styles";

const CovidContainer = () => {

  const dispatch = useDispatch();
  const data = useSelector(state => state.covidData);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCovidData = () => {
    setIsLoading(true);
    getCovidData().then(results => {
      results.json().then((res) => {
        setIsLoading(false);
        dispatch({
          type: SET_COVID_DATA,
          payload: res
        })
      })
    })
  }

  const handleRefresh = () => {
    fetchCovidData();
  }
  useEffect(() => {
    fetchCovidData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      {
        <> 
          <Header />
          <GlobalData globalData={data?.Global || {}} isLoading={isLoading} />
          <CountriesData handleRefresh={handleRefresh} isLoading={isLoading}/>
        </>
      }
    </Wrapper>
  )
}

export default CovidContainer