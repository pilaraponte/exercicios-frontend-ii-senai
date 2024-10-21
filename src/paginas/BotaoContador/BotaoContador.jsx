import { useState } from "react";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
const BotaoContador = () => {
  const [numero, setNumero] = useState(0);

  const incrementar = () => {
    setNumero(numero + 1);
  };

  return (
    <Principal
    titulo={"Botão Contador"} 
    voltarPara={"/"} 
    questao={ "1. Crie um componente chamado BotaoContador que contém um botão com a descrição Contador é: xx, ao clicar no botão o número deve ser incrementado em 1: " } >
     
      <div>

        <BotaoCustomizado aoClicar={incrementar} cor={"primaria"}>
          Contador é: {numero}
        </BotaoCustomizado>
      </div>
      
    </Principal>
  );
};

export default BotaoContador;
