import Search from "./Search";
import { Card } from "react-bootstrap";

function WeatherCard({ data, updatedLocation }) {
  return (
    <Card style={{ width: "auto" }} body className="mx-auto my-5">
      <Card.Img
        variant="top"
        style={{ width: "15%" }}
        src={data && data.icon}
      />
      <Card.Body>
        <Card.Title as="h1">
          {/* If the country is USA it returns the tempreture in fahrenheit, or else it returns it in celcius. */}
          {data && data.country !== null
            ? data.country === "United States of America" ||
              data.country === "USA"
              ? `${data.temp_f}°F`
              : `${data.temp_c}°C`
            : null}
        </Card.Title>
        <Card.Text>
          {data ? data.description : "Please Enter a City or Zip Code."}
        </Card.Text>
        <Search
          updatedLocation={(updateLocation) => updatedLocation(updateLocation)}
        />
      </Card.Body>
    </Card>
  );
}

export default WeatherCard;
