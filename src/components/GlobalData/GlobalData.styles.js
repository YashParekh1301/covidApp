import styled from "styled-components";

const GlobalDataWrapper = styled.div`
    // display: flex;
    // justify-content: space-between;
    background-color: #fafafa;
`;

const ChartWrapper = styled.div`
    width: 60%;
`;
const GlobalDataTextWrapper = styled.div`
    width: 35%;
    margin: auto;
`;

const GlobalDataHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 20px;
    font-size: 24px;
    border-bottom: solid 1px #e8e8e8;
`;
const GlobalDataHeaderText = styled.div``;
const GlobalDataHeaderDate = styled.div`
    font-size: 16px;
    color: #d82138;
    line-height: 32px;
    margin-left: 8px;
    font-weight: 700;
`;
const GlobalDataHeaderLink = styled.div``;
const GlobalDataView = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 20px;
    @media (max-width: 944px) {
        display: block;
      }
`;
export {
  GlobalDataWrapper,
  ChartWrapper,
  GlobalDataTextWrapper,
  GlobalDataHeader,
  GlobalDataHeaderText,
  GlobalDataHeaderDate,
  GlobalDataHeaderLink,
  GlobalDataView,
}