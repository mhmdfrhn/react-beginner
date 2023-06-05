import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Message from "./Message";

const App = () => {
  // const items = [
  //   "indonesia",
  //   "singapore",
  //   "thailand",
  //   "philipines",
  //   "japan",
  //   "korea",
  // ];

  // const handleSelectedItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="cities"
        onSelectedItem={handleSelectedItem}
      /> */}
      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
};

export default App;
