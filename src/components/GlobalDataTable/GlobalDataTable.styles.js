import styled from "styled-components";

const GlobalDataTableWrapper = styled.div``;

const TableWrapper = styled.table`
    width: 100%;
    border: solid 1px black;
    border-collapse: collapse;
`;
const TableRow = styled.tr``;
const TableHeader = styled.th`
    border: solid 1px black;
    padding: 6px;
    border-collapse: collapse;
`;
const TableCell = styled.td`
    border: solid 1px black;
    padding: 6px;
    border-collapse: collapse;
    &.header-cell {
        font-weight: 700;
    }
`;

export {
  GlobalDataTableWrapper,
  TableWrapper,
  TableRow,
  TableHeader,
  TableCell
}