import React from "react"
import {GlobalDataCardsWrapper, GlobalDataNumber, GlobalDataDescription, StyledShimmer} from "./GlobalDataCards.styles";

type IProps = {
  newNumber: number,
  newText: string,
  totalNumber: number,
  totalText: string,
  isLoading: boolean,
  
}

const GlobalDataCards = (props: IProps) => {

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