import React, { useState } from "react";
import Principal from "../Principal/Principal";
import { FaMinus } from "react-icons/fa6";
import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import { FaEquals } from "react-icons/fa6";



const Diminuir = () => {
  const [numeroUm, setNumeroUm] = useState("");
  const [numeroDois, setNumeroDois] = useState("");
  const [resultado, setResultado] = useState(0);

  const diminui = () =>{
    setResultado(Number(numeroUm) - Number(numeroDois));
    setResultado(+numeroUm- +numeroDois);
  }

  return (
    <Principal
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
    aoClicar={diminui} cor="secundaria"
    onKeyUp={(e) => {
        if (e.key === "ENter"){
            diminui();
        }
    }} >
    Diminuir
    </BotaoCustomizado>  {resultado}

    </div>
    </Principal>
  );
};

export default Diminuir;
