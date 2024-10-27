import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import Principal from "../Principal/Principal";
import React, { useState } from "react";

const CambioDolar = () => {
    const [numeroUm, setNumeroUm] = useState("");
    const [numeroDois, setNumeroDois] = useState("");
    const [resultadoUm, setResultadoUm] = useState(0);
    const [resultadoDois, setResultadoDois] = useState(0);

    const emDolar = (valorReal) => {
        setResultadoUm(Number(valorReal) / 5);
        setNumeroUm(valorReal);
    };

    const emReal = (valorDolar) => {
        setResultadoDois(Number(valorDolar) * 5);
        setNumeroDois(valorDolar);
    };

    return (
        <div>
            <Principal 
                questao="7. Considere o valor do dólar igual a R$5,00. Crie um componente chamado CambioDolar que contém dois campos tipo numérico, ao ser digitado o valor em real deve ser calculado o valor em dólar e o contrário também deve ocorrer:"
            >
                <div>
                <BotaoCustomizado  cor="primaria">em Real:</BotaoCustomizado>    <input
                        style={{ width: "100px", marginRight: "10px" }}
                        type="number"
                        placeholder="Valor em R$"
                        value={numeroUm}
                        onChange={(e) => emDolar(e.target.value)}
                    /> 

                <BotaoCustomizado  cor="secundaria">Valor em Dólar: U${resultadoUm.toFixed(2)}</BotaoCustomizado> 
                </div> 

                <div>
                <BotaoCustomizado  cor="secundaria">em Dólar:</BotaoCustomizado>    <input
                        style={{ width: "100px", marginRight: "10px" }}
                        type="number"
                        placeholder="Valor em U$"
                        value={numeroDois}
                        onChange={(e) => emReal(e.target.value)}
                    /> 

                <BotaoCustomizado  cor="primaria">Valor em Real: R${resultadoDois.toFixed(2)}</BotaoCustomizado> 
                </div>           
                
            </Principal>
        </div>
    );
};

export default CambioDolar;
