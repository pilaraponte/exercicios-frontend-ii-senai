import React, { useState } from "react";
import Principal from "../Principal/Principal";
import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import { FaDivide } from "react-icons/fa6";



const Dividir = () => {
  const [numeroUm, setNumeroUm] = useState("");
  const [numeroDois, setNumeroDois] = useState("");
  const [resultado, setResultado] = useState(0);

  const divide = () =>{
    setResultado(Number(numeroUm) / Number(numeroDois));
    setResultado(+numeroUm / +numeroDois);
  }

  return (
    <Principal
     questao="6. Crie um componente chamado Dividir que contém dois campos tipo numérico, e um botão Dividir que ao ser clicado deve dividir os dois valores e mostrar o resultado">
    <div>
    <input 
    style={{width: "100px"}}
    type="number"
    placeholder="Número Um"
    value={numeroUm}
    onChange={(e) => setNumeroUm(e.target.value)}/> <FaDivide />    <input 
    style={{ width: "100px"}}
    type="number"
    placeholder="Número Dois"
    value={numeroDois}
    onChange={(e) => setNumeroDois(e.target.value)}/>   <BotaoCustomizado
    aoClicar={divide} cor="secundaria"
    onKeyUp={(e) => {
        if (e.key === "ENter"){
            divide();
        }
    }} >
    Dividir
    </BotaoCustomizado>  {resultado}

    </div>
    </Principal>
  );
};

export default Dividir;
