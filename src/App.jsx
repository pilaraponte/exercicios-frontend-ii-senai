import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Cabecalho from './comum/componentes/cabecalho/Cabecalho';
import Rodape from './comum/componentes/rodape/Rodape';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import ListaProdutos from './paginas/ListaProdutos/ListaProdutos';
import BotaoContador from './paginas/BotaoContador/BotaoContador';
import BotaoIncrementarDecrementar from './paginas/BotaoIncrementarDecrementar/BotaoIncrementarDecrementar';
import PaginaListaTarefas from './paginas/PaginaListaTarefas/PaginaListaTarefas';

const router = createBrowserRouter([
  {
    path: '',
    element: <PaginaInicial />,
  },
  {
    path: 'lista-produtos',
    element: <ListaProdutos />,
  },
  {
    path: 'botao-contador',
    element: <BotaoContador />,
  },
  {
    path: '/botao-incremenar-decrementar',
    element: <BotaoIncrementarDecrementar />,
  },
  {
    path: '/lista-tarefas',
    element: <PaginaListaTarefas />,
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