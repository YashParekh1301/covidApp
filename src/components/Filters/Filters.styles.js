import styled from "styled-components";

const FilterWrapper = styled.div`
    display: flex;
    gap: 20px;
    @media (max-width: 944px) {
        flex-direction: column;
    }
`;
const FilterColumn = styled.div``;
const FilterComparator = styled.div``;
const FilterValue = styled.div``;
const FilterSubmitButton = styled.div``;

export {
  FilterWrapper,
  FilterColumn,
  FilterComparator,
  FilterValue,
  FilterSubmitButton
}