import { Alert } from "react-bootstrap";

function AlertDismissibleExample({ message }) {
  return setTimeout(() => {
    <Alert variant="primary">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>{message}</p>
    </Alert>;
  }, 100);
}

export default AlertDismissibleExample;
