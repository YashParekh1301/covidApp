import React from "react"
import {GlobalDataCardsWrapper, GlobalDataNumber, GlobalDataDescription, StyledShimmer} from "./GlobalDataCards.styles";

const GlobalDataCards = (props) => {

  const {newNumber, newText, totalNumber, totalText, isLoading} = props;

  return (
    !isLoading ? <>
      <GlobalDataCardsWrapper className="global-data-cards">
        <GlobalDataNumber>{newNumber}</GlobalDataNumber>
        <GlobalDataDescription>{newText}</GlobalDataDescription>
        <GlobalDataNumber>{totalNumber}</GlobalDataNumber>
        <GlobalDataDescription>{totalText}</GlobalDataDescription>
      </GlobalDataCardsWrapper>
    </> : 
      <>
        <StyledShimmer />
      </>
    
    
  )
}

export default GlobalDataCards