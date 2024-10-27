import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import Principal from "../Principal/Principal"
import React, { useState } from "react";

const CambioEuro = () => {
    const [numeroUm, setNumeroUm] = useState("");
    const [numeroDois, setnumeroDOis] = useState("");
    const [resultadoUm, setResultadoUm] = useState(0);
    const [resultadoDois, setResultadoDois] = useState(0);

    const emEuro = (valorReal) => {
        setResultadoUm(Number(valorReal) / 5.50);
        setNumeroUm(valorReal);
    }

    const emReal = (valorEuro) => {
        setResultadoDois(Number(valorEuro) * 5.50)
        setnumeroDOis(valorEuro);
    }

    return (

        <Principal
        questao="8. Considere o valor do euro igual a R$5,50. Crie um componente chamado CambioEuro que contém dois campos tipo numérico, ao ser digitado a valor em real deve ser calculado o valor em euro e o contrário também deve ocorrer:">       
        <div>
            <BotaoCustomizado cor="primaria">Em real</BotaoCustomizado>   <input 
                  style={{ width: "100px", marginRight: "10px" }}
                  type="number"
                  placeholder="Valor em R$"
                  value={numeroUm}
                  onChange={(e) => emEuro(e.target.value)}
                  />
            <BotaoCustomizado cor="secundaria">Valor em Euro: €{resultadoUm.toFixed(2)} </BotaoCustomizado>
        </div>
        <div>
            <BotaoCustomizado cor="secundaria">Em Euro</BotaoCustomizado>  <input
                style={{ width: "100px", marginRight: "10px" }}
                type="number"
                placeholder="Valor em U$"
                value={numeroDois}
                onChange={(e) => emReal(e.target.value)}          
            />
            <BotaoCustomizado cor="primaria">Valor em Real: R${resultadoDois.toFixed(2)}</BotaoCustomizado>
        </div>
        </Principal>
    )
}

export default CambioEuro;