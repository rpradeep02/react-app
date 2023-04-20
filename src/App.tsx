// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["madurai", "bglr", "chennai", "cbe"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

import { useState } from "react";
import Alert from "./components/Alert";

// function App() {
//   return (
//     <div>
//       <Alert>
//         Hello <span>world</span>
//       </Alert>
//     </div>
//   );
// }

import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}

      <Button color="success" onClick={() => setAlertVisibility(true)}>
        My button
      </Button>
    </div>
  );
}
export default App;

{
  /* <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> */
}
