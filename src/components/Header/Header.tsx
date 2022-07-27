import React from "react"
import CovidIcon from '../../assets/covid_ic.png';
import {HeaderWrapper, HeaderText, HeaderIcon, HeaderImg} from "./Header.styles";
// const CovidIcon = require("../../assets/covid_ic.png");
const Header = () => {

  return (
    <HeaderWrapper>
      <HeaderIcon><HeaderImg src={CovidIcon}/></HeaderIcon>
      <HeaderText>Covid Cases Today</HeaderText>
    </HeaderWrapper>
  )
}

export default Header;