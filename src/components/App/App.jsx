import { Fragment } from "react";
//components
import InputTodo from "../CRUD/InputTodo.jsx";
import ListTodos from "../CRUD/ListTodo.jsx";

function App() {
  return (
    <Fragment>
      <div className="container mx-auto p-2">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
