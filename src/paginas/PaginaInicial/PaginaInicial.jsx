import { useNavigate } from "react-router-dom";
import Principal from "../../comum/componentes/Principal/Principal";
import "./PaginaInicial.css";
import BotaoContador from "../../comum/componentes/BotaoContador/BotaoContador";
import Contador from "../../comum/componentes/Contador/Contador";
import Somar from "../../comum/componentes/Somar/Somar";
import Diminuir from "../../comum/componentes/Diminuir/Diminuir";
import Multiplicar from "../../comum/componentes/Multiplicar/Multiplicar";
import Dividir from "../../comum/componentes/Dividir/Dividir";
import CambioDolar from "../../comum/componentes/CambioDolar/CambioDolar";
import CambioEuro from "../../comum/componentes/CambioEuro/CambioEuro";
import CalculoIMC from "../../comum/componentes/CalculoIMC/CalculoIMC";
import AdicionarNome from "../../comum/componentes/AdicionarNome/AdicionarNome";
import RemoverNome from "../../comum/componentes/RemoverNome/RemoverNome";

const PaginaInicial = () => {
  const navigate = useNavigate();

  return (
    <Principal titulo="Lista de Exercícios II - ReactJS">
    <BotaoContador/>
    <hr />
    
    <Contador/>
    <hr />
    
    <Somar/>
    <hr />
    
    <Diminuir />
    <hr />

    <Multiplicar />
    <hr />

    <Dividir />
    <hr />

    <CambioDolar />
    <hr />

    <CambioEuro />
    <hr />

    <CalculoIMC />
    <hr />

    <AdicionarNome />
    <hr />
    
    <RemoverNome />
    <hr />
    
    </Principal>
  );
};

export default PaginaInicial;
