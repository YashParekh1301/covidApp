import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";

const GlobalDataCardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px;
    border-bottom: 2px solid #d82138;
    padding: 16px;
    background-color: #F7F7F7;
    width: 30%;

    @media (max-width: 944px) {
        width: 100%;
    }
`;
const GlobalDataNumber = styled.div`
    color: #d82138;
    font-weight: 700;
    font-size: 40px;
    line-height: 36px;
`;
const GlobalDataDescription = styled.div``;

const StyledShimmer = styled(Skeleton)`
    &.MuiSkeleton-root {
        height: 180px;
        width: 30%;
        @media (max-width: 944px) {
            width: 100%;
        }
    }
`;
export {
  GlobalDataCardsWrapper,
  GlobalDataNumber,
  GlobalDataDescription,
  StyledShimmer
}