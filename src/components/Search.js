import { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function Search({ updatedLocation }) {
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    updatedLocation(search);
    setSearch("");
  };
  return (
    <form>
      <InputGroup className="mb-3" onSubmit={handleSubmit}>
        <InputGroup.Text>
          <Icon.GeoAltFill color={"#bc4f51"} />
        </InputGroup.Text>
        <FormControl
          placeholder="City or Zip Code"
          aria-label="City or Zip Code"
          aria-describedby="basic-addon2"
          value={search}
          onChange={handleChange}
        />
        <Button
          onClick={handleSubmit}
          disabled={!search}
          type="submit"
          variant="outline-secondary"
          id="button-addon2"
        >
          <Icon.Search className="center-button" />
        </Button>
      </InputGroup>
    </form>
  );
}

export default Search;
