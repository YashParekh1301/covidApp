import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Skeleton from "@mui/material/Skeleton";
import { StyledTableCell, TableNoRows } from "./Table.styles";
import { tableColumns, tableHeaders } from "../../helpers/constants";

export default function CountryDataTable(props) {

  const { tableRows, sortData, handleTableHeaderClick, isLoading } = props;
  const {sortedBy, sortingOrder} = sortData;
  const rows = tableRows;
  const columns = tableColumns;
  const headers = tableHeaders;
  const shimmerRows = 5;
  const getColumnHeaderSortIcon = (columnId) => {
    if(sortedBy === columnId) {
      if(sortingOrder === "ASC") {
        return <span><ArrowUpwardIcon fontSize={"small"} /></span>
      }
      else if(sortingOrder === "DESC"){
        return <span><ArrowDownwardIcon fontSize={"small"} /></span>
      }
    }
    return <></>;
  }

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            {
              headers && headers.length > 0 &&
              <TableRow>
                {
                  headers.map((header) => {
                    return <StyledTableCell key={header.id} align="center" colSpan={header.colspan}>
                      {header.label}
                    </StyledTableCell>
                  })
                }
              </TableRow>
            }
            
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  className='table-header-cell'
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                  onClick={() => handleTableHeaderClick(column.id)}
                >
                  {column.label}
                  {getColumnHeaderSortIcon(column.id)}
                  <></>
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              isLoading && <>
                {
                  [...Array(shimmerRows).keys()].map((shimmerRow, index) => {
                    return (
                      <TableRow tabIndex={-1} key={index}>
                        {columns.map((column) => {
                          return (
                            <StyledTableCell className='table-cell' key={column.id} align={typeof value === "number" ? "right" : "left"}>
                              <Skeleton />
                            </StyledTableCell>
                          );
                        })}
                      </TableRow>
                    )
                  })
                }
              </>
            }
            {
              !isLoading && rows.length > 0 ? <>
                {rows
                  .map((row) => {
                    return (
                      <TableRow tabIndex={-1} key={row.ID}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <StyledTableCell className='table-cell' key={column.id} align={typeof value === "number" ? "right" : "left"}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </StyledTableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </>
                :
                <>
                  <TableNoRows>
                    No Rows to show
                  </TableNoRows>
                </>
            }
            
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
