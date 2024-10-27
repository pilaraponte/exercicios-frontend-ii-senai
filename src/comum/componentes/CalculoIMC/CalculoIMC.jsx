import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import Principal from "../Principal/Principal";
import React, { useState } from "react";

const CalculoIMC = () => {
    const [numeroUm, setNumeroUm] = useState("");  // Peso em Kg
    const [numeroDois, setNumeroDois] = useState("");  // Altura em Cm
    const [resultadoImc, setResultadoImc] = useState(0);

    const calcularImc = () => {
        const pesoKg = Number(numeroUm);
        const alturaM = Number(numeroDois) / 100; // Convertendo para metros
        const imc = pesoKg / (alturaM * alturaM);
        setResultadoImc(imc);
    };

    const classificarImc = (imc) => {
        switch (true) {
            case imc < 18.5:
                return "Abaixo do peso";
            case imc < 25:
                return "Peso normal";
            case imc < 30:
                return "Sobrepeso";
            default:
                return "Obeso";
        }
    };

    return (
        <Principal 
            questao="9. Considere a fórmula do IMC = peso / (altura * altura) e status: <18.5 = Abaixo do peso, <25 = Peso normal, <30 = Sobrepeso e acima de 30 = Obeso . Crie um componente chamado CalculoIMC que contém dois campos tipo numérico, e um botão Calcular IMC que ao ser clicado deve fazer o cálculo e mostrar o resultado">
            
            <div>
                <BotaoCustomizado cor="primaria">Peso em Kg:</BotaoCustomizado>    
                <input 
                    style={{ width: "100px", marginRight: "10px" }}
                    type="number"
                    placeholder="Peso em Kg"
                    value={numeroUm}
                    onChange={(e) => setNumeroUm(e.target.value)} // Atualiza o peso
                />

                <BotaoCustomizado cor="secundaria">Altura em Cm:</BotaoCustomizado>    
                <input 
                    style={{ width: "100px", marginRight: "10px" }}
                    type="number"
                    placeholder="Altura em Cm"
                    value={numeroDois}
                    onChange={(e) => setNumeroDois(e.target.value)} // Atualiza a altura
                />

                <BotaoCustomizado cor="primaria" aoClicar={calcularImc}>Calcular IMC</BotaoCustomizado>         
                <div>           
                    Seu IMC é: {resultadoImc.toFixed(2)} - {classificarImc(resultadoImc)}
                </div>     
            </div>
        </Principal>
    );
}

export default CalculoIMC;
