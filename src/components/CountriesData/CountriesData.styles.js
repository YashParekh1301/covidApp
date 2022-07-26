import styled from "styled-components";

const CountriesDataWrapper =styled.div`
    height: 100vh;
    background-color: #fafafa;
    margin-top: 40px;
    padding: 24px;
`;

const CountriesDataHeader = styled.div`
    padding-bottom: 16px;
    border-bottom: 2px solid #d82138;
`;
const CountriesDataHeaderText = styled.div`
    display: flex;
    font-size: 24px;
    @media (max-width: 944px) {
        font-size: 20px;
        margin-bottom: 10px;
    }
`;
const CountriesDataFilter = styled.div``;
const CountriesDataHeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    @media (max-width: 944px) {
        display: block;
    }
`;
const CountriesDataHeaderBottom = styled.div``;
const StyledRefreshIcon = styled.div`
    margin-left: 10px;
    cursor: pointer;
`;
export {
  CountriesDataWrapper,
  CountriesDataHeader,
  CountriesDataHeaderText,
  CountriesDataFilter,
  CountriesDataHeaderTop,
  CountriesDataHeaderBottom,
  StyledRefreshIcon
}