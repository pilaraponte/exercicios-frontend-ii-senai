import React, { useState } from "react";
import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import { FaPlus } from "react-icons/fa6";
import Principal from "../Principal/Principal";

const Somar = () => {
    
    const [numeroUm, setNumeroUm] = useState("");
    const [numeroDois, setNumeroDois] = useState("");
    const [resultado, setResultado] = useState(0);

    const soma = () => {
        setResultado(Number(numeroUm) + Number(numeroDois));
        setResultado(+numeroUm + +numeroDois);
    }

    return (
        <div>
            <Principal
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
            aoClicar={soma} cor="primaria"
            onkeyUp={(e) =>{
                if (e.key === "Enter") {
                    soma();
                }
            }}>
            Somar
            </BotaoCustomizado>  {resultado} 
            </div>
            </Principal>
        </div>
)}

export default Somar;