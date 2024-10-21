import React, { useState } from "react";
import Principal from "../../comum/componentes/Principal/Principal";
import { FaMinus } from "react-icons/fa6";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { FaEquals } from "react-icons/fa6";



const BotaoDiminuir = () => {
  const [numeroUm, setNumeroUm] = useState("");
  const [numeroDois, setNumeroDois] = useState("");
  const [resultado, setResultado] = useState(0);

  const diminuir = () =>{
    setResultado(Number(numeroUm) - Number(numeroDois));
    setResultado(+numeroUm- +numeroDois);
  }

  return (
    <Principal
      titulo="Botão Diminuir"
      voltarPara="/"
      questao="4. Crie um componente chamado Diminuir que contém dois campos tipo numérico, e um botão Diminuir que ao ser clicado deve diminuir os dois valores e mostrar o resultado: ">
    <div>
    <input 
    style={{width: "100px"}}
    type="number"
    placeholder="Número Um"
    value={numeroUm}
    onChange={(e) => setNumeroUm(e.target.value)}/> <FaMinus />  <input 
    style={{ width: "100px"}}
    type="number"
    placeholder="Número Dois"
    value={numeroDois}
    onChange={(e) => setNumeroDois(e.target.value)}/>   <BotaoCustomizado
    aoClicar={diminuir} cor="secundaria"
    onKeyUp={(e) => {
        if (e.key === "ENter"){
            diminuir();
        }
    }} >
    <FaEquals />
    </BotaoCustomizado>  {resultado}

    </div>
    </Principal>
  );
};

export default BotaoDiminuir;
