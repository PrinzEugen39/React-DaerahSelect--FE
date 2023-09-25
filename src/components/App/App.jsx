
import { useState } from "react";
import Location from "./Location";
import Table from "./table";


function App() {
  const [prov, setProv] = useState(null)

  function handleAddInput(input) {
    setProv(input)
  }
  
  return (
    <>
      <Location onAddInput={handleAddInput}/>
      <Table input={prov}/>
    </>
  );
}


export default App;