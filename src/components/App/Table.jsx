import { Fragment } from "react";
import InputTodo from "../CRUD/InputTodo.jsx";
import ListTodos from "../CRUD/ListTodo.jsx";
import PropTypes from "prop-types";

function Table({ input }) {
  const provinceData = input
  // console.log(provinceData)
  return (
    <Fragment>
      <div className="container mx-auto p-2">
        <InputTodo addInput={provinceData}/>
        <ListTodos />
      </div>
    </Fragment>
  );
}
Table.propTypes = {
    items: PropTypes.array
  }
export default Table;
