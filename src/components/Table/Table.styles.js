import styled from "styled-components";
import TableCell from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)`
    border-right: solid 1px rgba(224, 224, 224, 1);
    &.table-header-cell {
        cursor: pointer;
    }
`;

const TableNoRows = styled.div`
  padding: 16px;
  text-align: center;
  width: 100%;
  position: relative;
`;

export {
  StyledTableCell,
  TableNoRows
}