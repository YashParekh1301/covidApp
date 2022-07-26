import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

import { FilterWrapper,
  FilterColumn,
  FilterComparator,
  FilterValue,
  FilterSubmitButton
} from "./Filters.styles";

const columns = [
  {
    id: "", label: "Select Column"
  },
  {
    id: "Country", label: "Country Name"
  },
  {
    id: "NewConfirmed", label: "New Confirmed"
  },
  {
    id: "TotalConfirmed", label: "Total Confirmed"
  },
  {
    id: "NewDeaths", label: "New Deaths"
  },
  {
    id: "TotalDeaths", label: "Total Deaths"
  },
  {
    id: "NewRecovered", label: "New Recovered"
  },
  {
    id: "TotalRecovered", label: "Total Recovered"
  }
]

const comparators = [
  {
    id: "", label: "Select Comparator"
  },
  {
    id: "lt", label: "is less than",
  },
  {
    id: "gt", label: "is greater than",
  }
]
const Filters = (props) => {

  const {applyFilters} = props;
  const [filterColumnId, setFilterColumnId] = useState("");
  const [filterComparator, setFilterComparator] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleFilterColumnChange = (e) => {
    setFilterColumnId(e.target.value);
  }

  const handleFilterValue = (filterValue) => {
    setFilterValue(filterValue);
  }

  const resetFilters = () => {
    setFilterColumnId("");
    setFilterComparator("");
    setFilterValue("");
    applyFilters({
      filterColumnId: "",
      filterComparator: "",
      filterValue: ""
    })
  }
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
                    Filters
        </Accordion.Header>
        <Accordion.Body>
          <FilterWrapper>
            <FilterColumn>
              <Form.Select onChange={(e) => handleFilterColumnChange(e)} value={filterColumnId}>
                {
                  columns.map((col) => {
                    return <option key={col.id} value={col.id}>{col.label}</option>
                  })
                }
              </Form.Select>
            </FilterColumn>
            <FilterComparator>
              <Form.Select onChange={(e) => setFilterComparator(e.target.value)} value={filterComparator}>
                {
                  comparators.map((comp) => {
                    return <option key={comp.id} value={comp.id}>{comp.label}</option>
                  })
                }
              </Form.Select>
            </FilterComparator>
            <FilterValue>
              <Form.Group className="mb-3">
                {/* <Form.Label>Enter Value</Form.Label> */}
                <Form.Control placeholder="Enter Value" value={filterValue} onChange={(e) => handleFilterValue(e.target.value)}/>
              </Form.Group>
            </FilterValue>
            <FilterSubmitButton>
              <Button variant="primary" type="submit" onClick={() => applyFilters({filterColumnId, filterComparator, filterValue})}>
                                Submit
              </Button>
            </FilterSubmitButton>
            <FilterSubmitButton>
              <Button variant="primary" type="submit" onClick={() => resetFilters()}>
                                Reset Filters
              </Button>
            </FilterSubmitButton>
          </FilterWrapper>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Filters;