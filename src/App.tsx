// .....list group.....
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

// import { useState } from "react";
// import Alert from "./components/Alert";

// function App() {
//   return (
//     <div>
//       <Alert>
//         Hello <span>world</span>
//       </Alert>
//     </div>
//   );
// }

//...... button with alert......
// import Button from "./components/Button";

// function App() {
//   const [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
//       )}

//       <Button color="success" onClick={() => setAlertVisibility(true)}>
//         My button
//       </Button>
//     </div>
//   );
// }
// export default App;

// {
/* <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> */
//}

//.......like option....

// import Like from "./components/Like";

// function App() {
//   return <Like onClick={() => console.log("clicked")}></Like>;
// }
// export default App;

//.............expandable text.............

// import ExpandableText from "./components/ExpandableText";

// function App() {
//   return (
//     <div>
//       <ExpandableText>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quia eius
//         doloribus nisi sit aliquam quis officiis qui, numquam dicta tempora hic.
//         Tempora rem, incidunt beatae optio quis officiis vitae numquam autem
//         maiores harum quasi repellendus voluptas, possimus cupiditate nesciunt
//         voluptatibus at dolorem nihil, nemo vel odio placeat aliquam!
//         Voluptates, doloremque. Quod incidunt consequuntur aliquam delectus
//         saepe, debitis laborum, dignissimos aliquid earum, ipsum error labore.
//         Totam sed ad incidunt laborum iusto voluptates enim ipsum cupiditate
//         illo, dolorem, dolore consectetur repudiandae eaque sit, possimus veniam
//         tempora optio quisquam voluptatem amet. Blanditiis ipsum nulla nisi
//         libero? Corporis modi dolore assumenda officia debitis.
//       </ExpandableText>
//     </div>
//   );
// }
// export default App;

import Form from "./components/Form";

function App() {
  return (
    <div>
      <Form></Form>
    </div>
  );
}
export default App;
