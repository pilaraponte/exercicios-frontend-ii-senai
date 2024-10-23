import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cabecalho from "./comum/componentes/cabecalho/Cabecalho";
import Rodape from "./comum/componentes/rodape/Rodape";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import BotaoContador from "./paginas/BotaoContador/BotaoContador";
import BotaoIncrementarDecrementar from "./paginas/BotaoIncrementarDecrementar/BotaoIncrementarDecrementar";
import BotaoSomar from "./paginas/BotaoSomar/BotaoSomar";
import BotaoDiminuir from "./paginas/BotaoDiminuir/BotaoDiminuir";


const router = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },

  {
    path: "botao-contador",
    element: <BotaoContador />,
  },
  {
    path: "/botao-incremenar-decrementar",
    element: <BotaoIncrementarDecrementar />,
  },
  
  {
    path: "/botao-somar",
    element: <BotaoSomar/>,
  },

  {
    path: "/botao-diminuir",
    element: <BotaoDiminuir />,
  }

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
