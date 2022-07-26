import React from "react";
import { useSelector } from "react-redux";
import GlobalDataCards from "../GlobalDataCards/GlobalDataCards";
import { GlobalDataWrapper, GlobalDataHeader, GlobalDataHeaderText, GlobalDataHeaderDate, GlobalDataView } from "./GlobalData.styles";

const GlobalData = (props) => {

  const {isLoading} = props;
  const covidData = useSelector((state) => state.covidData) || {}; 
  const { Global: globalData} = covidData;
  const {NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered} = globalData || {};
  let localDate = "";
  if(globalData?.Date) {
    localDate = new Date(globalData?.Date || undefined);
    localDate = `${localDate.getDate()}/${localDate.getMonth() + 1}/${localDate.getFullYear()}`
  }
  return (
    <GlobalDataWrapper id='global-data-container' className="global-data-container">
      <GlobalDataHeader>
        <GlobalDataHeaderText>
            Today&apos;s Numbers
        </GlobalDataHeaderText>
        <GlobalDataHeaderDate>{localDate}</GlobalDataHeaderDate>
      </GlobalDataHeader>
      <GlobalDataView>
        <GlobalDataCards 
          newNumber={NewConfirmed}
          newText={"New Confirmed Cases"}
          totalNumber={TotalConfirmed}
          totalText={"Total Confirmed Cases"}
          isLoading={isLoading}
        />
        <GlobalDataCards 
          newNumber={NewDeaths}
          newText={"New Death Cases"}
          totalNumber={TotalDeaths}
          totalText={"Total Death Cases"}
          isLoading={isLoading}
        />
        <GlobalDataCards 
          newNumber={NewRecovered}
          newText={"New Recovered Cases"}
          totalNumber={TotalRecovered}
          totalText={"Total Recovered Cases"}
          isLoading={isLoading}
        />
      </GlobalDataView>
    </GlobalDataWrapper>
  )
}

export default GlobalData