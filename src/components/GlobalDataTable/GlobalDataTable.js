import React from "react"
import { GlobalDataTableWrapper, TableWrapper, TableRow, TableHeader, TableCell } from "./GlobalDataTable.styles";

const GlobalDataTable = (props) => {

  const {globalData} = props;
  const {NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered} = globalData;
  return (
    <>
      <GlobalDataTableWrapper>
        <TableWrapper>
          <TableRow>
            <TableHeader>Global Data</TableHeader>
            <TableHeader>New Cases</TableHeader>
            <TableHeader>Total Cases</TableHeader>
          </TableRow>
          <TableRow>
            <TableCell className='header-cell'>Confirmed Cases</TableCell>
            <TableCell>{NewConfirmed}</TableCell>
            <TableCell>{TotalConfirmed}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='header-cell'>Deaths</TableCell>
            <TableCell>{NewDeaths}</TableCell>
            <TableCell>{TotalDeaths}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='header-cell'>Recovered Cases</TableCell>
            <TableCell>{NewRecovered}</TableCell>
            <TableCell>{TotalRecovered}</TableCell>
          </TableRow>
        </TableWrapper>
      </GlobalDataTableWrapper>
    </>
  )
}

export default GlobalDataTable