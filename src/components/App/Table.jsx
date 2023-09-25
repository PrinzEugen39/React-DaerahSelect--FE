import { Fragment } from "react";
import InputTodo from "../CRUD/InputTodo.jsx";
import ListTodos from "../CRUD/ListTodo.jsx";
import PropTypes from "prop-types";

function Table({ items }) {
  return (
    <Fragment>
      <div className="container mx-auto p-2">
        <InputTodo province={items}/>
        <ListTodos />
      </div>
    </Fragment>
  );
}
Table.propTypes = {
    items: PropTypes.array
  }
export default Table;
