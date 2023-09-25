import React, { useState } from "react";
import PropTypes from "prop-types";

function EditTodo({ todo }) {
  const [description, setDescription] = useState(todo.description);

  async function editDescription() {
    try {
      const body = { description };
      const res = await fetch(`http://localhost:5000/todo/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
      console.log(res);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        className="modal fade"
        id={`id${todo.todo_id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-black"
                id="staticBackdropLabel"
              >
                Edit Todo
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setDescription(todo.description)}
              ></button>
            </div>
            <div className="modal-body text-black">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => editDescription(e)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
EditTodo.propTypes = {
  todo: PropTypes.array
}

export default EditTodo;
