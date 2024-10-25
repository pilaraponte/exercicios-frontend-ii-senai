import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cabecalho from "./comum/componentes/cabecalho/Cabecalho";
import Rodape from "./comum/componentes/rodape/Rodape";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";


const router = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },


]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
    </>
  );
}

export default App;
