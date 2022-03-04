import { useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "./styles.css";
import "./bootstrap.min.css";

import useFetch from "./hooks/useFetch";
import WeatherCard from "./components/WeatherCard";
import ErrorAlert from "./components/ErrorAlert";

export default function App() {
  const [location, setLocation] = useState("");
  const { data, isLoading, error } = useFetch(location);
  return (
    <>
      <div className="App">
        <Container fluid className="center-container">
          <Row>
            <Col xs={12} md={12}>
              {isLoading && <Spinner animation="border" className="spinner" />}
              {location !== "" && error && <ErrorAlert message={error} />}
              <WeatherCard
                data={data}
                updatedLocation={(updatedLocation) =>
                  setLocation(updatedLocation)
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
