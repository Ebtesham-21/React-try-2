import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import ButtonBoot from "./components/ButtonBoot";
import Button from "./components/Button";
import { useState } from "react";
import Like from "./components/Like";

function App() {
  let items = ["Dhaka", "kg", "Sylhet", "Habiganj"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  // const [showAlert, setShowAlert] = useState(false);

  // const handleShowAlert = () => {
  //   setShowAlert((prevShowAlert) => !prevShowAlert);
  // };
  return (
    <>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      <Like />
    </>
    // <div>
    //   {showAlert && (
    //     <Alert>
    //       Hi <span>Test</span>
    //     </Alert>
    //   )}
    //   {/* <ButtonBoot /> */}
    //   <Button color="primary" onClick={handleShowAlert}>
    //     Click
    //   </Button>
    // </div>
  );
}

export default App;
