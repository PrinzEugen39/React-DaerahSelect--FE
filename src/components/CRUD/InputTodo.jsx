import { Fragment, useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function InputTodo({ addInput }) {
  const province = addInput

  const [description, setDescription] = useState(province ? province.name : "");
  if (province) console.log(province.name)

  useEffect(() => {
    if (province) {
      setDescription(province.name);
    }
  }, [province]);


  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      if (!description) return alert("Please enter todo");

      const body = { description };
      // eslint-disable-next-line no-unused-vars
      const res = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Province Add ?</h1>
      <form className="d-flex flex-column mt-3" onSubmit={onSubmitForm}>
        <label className="form-label">Todo</label>
        <input
          type="text"
          className="form-control"
          placeholder="input todo"
          value={description ? description : ""}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="d-grid gap-2 col-3 mx-auto">
          <button
            type="submit"
            className="btn btn-success mt-3 border border-danger"
          >
            Add
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default InputTodo;
