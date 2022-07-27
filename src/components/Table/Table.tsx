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
import { sortOrder, tableColumns, tableHeaders } from "../../helpers/constants";
import { ICountryConfig } from "../../interfaces";

type IProps = {
  tableRows: ICountryConfig[],
  sortData: {
    sortedBy: string,
    sortingOrder: sortOrder
  },
  handleTableHeaderClick: (a: string) => void,
  isLoading: boolean
}

export default function CountryDataTable(props: IProps) {

  const { tableRows, sortData, handleTableHeaderClick, isLoading } = props;
  const {sortedBy, sortingOrder} = sortData;
  const rows = tableRows;
  const columns = tableColumns;
  const headers = tableHeaders;
  const shimmerRows = 5;
  const getColumnHeaderSortIcon = (columnId: string) => {
    if(sortedBy === columnId) {
      if(sortingOrder === sortOrder.ASC) {
        return <span><ArrowUpwardIcon fontSize={"small"} /></span>
      }
      else if(sortingOrder === sortOrder.DESC){
        return <span><ArrowDownwardIcon fontSize={"small"} /></span>
      }
    }
    return <></>;
  }

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 550 }}>
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
                  style={{ top: 57 }}
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
              isLoading ? <>
                {
                  [...Array(shimmerRows).keys()].map((shimmerRow, index) => {
                    return (
                      <TableRow tabIndex={-1} key={index}>
                        {columns.map((column) => {
                          return (
                            <StyledTableCell className='table-cell' key={column.id}>
                              <Skeleton />
                            </StyledTableCell>
                          );
                        })}
                      </TableRow>
                    )
                  })
                }
              </>
             :
              rows.length > 0 ? <>
                {rows
                  .map((row) => {
                    return (
                      <TableRow tabIndex={-1} key={row.ID}>
                        {columns.map((column) => {
                          const value = row[column.id as keyof ICountryConfig];
                          return (
                            <StyledTableCell className='table-cell' key={column.id} align={typeof value === "number" ? "right" : "left"}>
                              {value}
                            </StyledTableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </>
                :
                <>
                  <TableRow>
                    <StyledTableCell colSpan={(columns || []).length}>
                        <TableNoRows>
                            No Rows to show
                        </TableNoRows>
                    </StyledTableCell>
                  </TableRow>
                </>
            }
            
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
