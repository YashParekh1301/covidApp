import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { debounce } from "../../helpers";
import { InputWrapper } from "./SearchInput.styles";

const SearchInput = (props) => {
  const { handleChange } = props;
  const [value, setValue] = useState("");
    
  const handleSearchInput = (e) => {
    const searchValue = e.target.value;
    debounce(() => handleChange(searchValue), 300)
    setValue(searchValue);

  }
  return (
    <InputWrapper>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Search by Country" value={value} onChange={(e) => handleSearchInput(e)}/>
      </Form.Group>
    </InputWrapper>
  )
}

export default SearchInput;