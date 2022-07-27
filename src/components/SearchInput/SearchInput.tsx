import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { debounce } from "../../helpers";
import { InputWrapper } from "./SearchInput.styles";

type IProps = {
  handleChange: (a: string) => void
}

const SearchInput = (props: IProps) => {
  const { handleChange } = props;
  const [value, setValue] = useState("");
    
  const handleSearchInput = (searchVal: string) => {
    debounce(() => handleChange(searchVal), 300)
    setValue(searchVal);

  }
  return (
    <InputWrapper>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Search by Country" value={value} onChange={(e) => handleSearchInput(e.target.value)}/>
      </Form.Group>
    </InputWrapper>
  )
}

export default SearchInput;