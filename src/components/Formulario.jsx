import Swal from "sweetalert2";
import { useState } from "react";

const Formulario = () => {
  const [todo, setTodo] = useState({
    title: "Tarea #01",
    description: "Descripcion #01",
    state: "pendiente",
    priority: true,
  });

  const { title, description, state, priority } = todo;
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [state, setState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Se necesita un titulo y una descripcion",
      });
    }
    console.log(title, description, state);
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleChange}
        // onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        cols="30"
        rows="10"
        name="description"
        value={description}
        onChange={handleChange}
        // onChange={e => setDescription(e.target.value)}
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="prioridad"
          checked={priority}
          onChange={handleChange}
        />
        <label htmlFor="prioridad">Prioritario</label>
      </div>
      <select
        className="form-select mb-2"
        name="state"
        value={state}
        onChange={handleChange}
        // onChange={e => setState(e.target.value)}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-success">
        Agregar Todo
      </button>
    </form>
  );
};

export default Formulario;
