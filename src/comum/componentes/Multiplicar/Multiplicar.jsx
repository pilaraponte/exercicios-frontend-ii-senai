import React, { useState } from "react";
import Principal from "../Principal/Principal";
import { FaStarOfLife } from "react-icons/fa6";
import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import { FaEquals } from "react-icons/fa6";



const Multiplicar = () => {
  const [numeroUm, setNumeroUm] = useState("");
  const [numeroDois, setNumeroDois] = useState("");
  const [resultado, setResultado] = useState(0);

  const multiplica = () =>{
    setResultado(Number(numeroUm) * Number(numeroDois));
    setResultado(+numeroUm * +numeroDois);
  }

  return (
    <Principal
     questao="5. Crie um componente chamado Multiplicar que contém dois campos tipo numérico, e um botão Multiplicar que ao ser clicado deve multiplicar os dois valores e mostrar o resultado: ">
    <div>
    <input 
    style={{width: "100px"}}
    type="number"
    placeholder="Número Um"
    value={numeroUm}
    onChange={(e) => setNumeroUm(e.target.value)}/> <FaStarOfLife />   <input 
    style={{ width: "100px"}}
    type="number"
    placeholder="Número Dois"
    value={numeroDois}
    onChange={(e) => setNumeroDois(e.target.value)}/>   <BotaoCustomizado
    aoClicar={multiplica} cor="primaria"
    onKeyUp={(e) => {
        if (e.key === "ENter"){
            multiplica();
        }
    }} >
    Multiplicar
    </BotaoCustomizado>  {resultado}

    </div>
    </Principal>
  );
};

export default Multiplicar;
