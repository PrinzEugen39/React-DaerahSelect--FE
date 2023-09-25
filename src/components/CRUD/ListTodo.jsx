import { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";

function ListTodos() {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    try {
      const res = await fetch("http://localhost:5000/todos");
      const data = await res.json();
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function deleteTodo(id) {
    try {
      // eslint-disable-next-line no-unused-vars
      const res = await fetch(`http://localhost:5000/todo/${id}`, {
        method: "DELETE"
      });
      setTodos(todos.filter(todo => todo.todo_id !== id))
      // const data = await res.json();

    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table table-dark table-striped mt-5">
        <thead>
          <tr>
            <th>No</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.todo_id}>
              <td>{index + 1}</td>
              <td>{todo.description}</td>
              <td>
                  <EditTodo todo={todo}/>
              </td>
              <td>
                <button onClick={() => deleteTodo(todo.todo_id)} type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ListTodos;
