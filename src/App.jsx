import Formulario from "./components/Formulario";
import { useState } from "react";
import Todos from "./components/Datos";

const initialStateTodos = [
  {
    id: 1,
    title: "Tarea #01",
    description: "Descripcion #01",
    state: true,
    priority: true,
  },
  {
    id: 2,
    title: "Tarea #02",
    description: "Descripcion #02",
    state: false,
    priority: false,
  },
  {
    id: 3,
    title: "Tarea #03",
    description: "Descripcion #03",
    state: false,
    priority: true,
  },
]

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  return (
    <div className="container mb-2">
      <h1 className="my-5">Formularios</h1>
      <Formulario />
      <Todos todos={todos} />
    </div>
  );
};

export default App;
