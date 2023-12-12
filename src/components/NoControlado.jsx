import { useRef } from "react";

const NoControlado = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    console.log([...data.entries()]);

    const objetoDatos = Object.fromEntries([...data.entries()]);
    console.log(objetoDatos);
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        defaultValue="Tarea #01"
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        cols="30"
        rows="10"
        name="description"
        defaultValue="Descripcion #01"
      />
      <select
        className="form-select mb-2"
        name="state"
        defaultValue="completado"
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-success">
        Procesar
      </button>
    </form>
  );
};

export default NoControlado;
