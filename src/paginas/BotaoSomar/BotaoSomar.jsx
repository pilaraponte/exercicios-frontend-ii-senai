import React, { useState } from "react";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { FaPlus } from "react-icons/fa6";
import { FaEquals } from "react-icons/fa6";


const BotaoSomar = () => {
    const [numeroUm, setNumeroUm] = useState("");
    const [numeroDois, setNumeroDois] = useState("");
    const [resultado, setResultado] = useState(0);

    const somar = () => {
        setResultado(Number(numeroUm) + Number(numeroDois));
        setResultado(+numeroUm + +numeroDois);
    }

    return (
        <div>
            <Principal
            titulo="Botão Somar" 
            voltarPara="/"
            questao="3. Crie um componente chamado Contador que contém dois botões, um para somar 1 ao ser clicado e outro para diminuir 1 ao ser clicado, e mostre o valor atual no meio entre os dois botões:">
            <div>
            <input 
            style={{ width: "100px"}}
            type="number"
            placeholder="Número Um"
            value={numeroUm}
            onChange={(e) => setNumeroUm(e.target.value)}/> <FaPlus />  <input 
            style={{ width: "100px"}}
            type="number"
            placeholder="Número Dois"
            value={numeroDois}
            onChange={(e) => setNumeroDois(e.target.value)}/>   <BotaoCustomizado
            aoClicar={somar} cor="primaria"
            onkeyUp={(e) =>{
                if (e.key === "Enter") {
                    somar();
                }
            }}>
             <FaEquals />
            </BotaoCustomizado>  {resultado} 
            </div>
            </Principal>
        </div>
)}

export default BotaoSomar;