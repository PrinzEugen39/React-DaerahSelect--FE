import { useState } from "react";
import Location from "./Location";
import Table from "./table";

function App() {
  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <>
      <Location onAddItems={handleAddItems}/>
      <Table items={items}/>
    </>
  );
}


export default App;