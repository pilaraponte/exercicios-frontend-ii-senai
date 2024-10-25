import React, { useState } from "react";
import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import Principal from "../Principal/Principal";

const Contador = () => {
  const [numero, setNumero] = useState(0);

  const incrementar = () => {
    setNumero(numero + 1);
  };

  const decrementar = () => {
    setNumero(numero - 1);
  };

  return (
    <div>
      <Principal
        questao="2. Crie um componente chamado Botão Incrementador e Decrementador que contém dois botões, um para somar 1 ao ser clicado e outro para diminuir 1 ao ser clicado, e mostre o valor atual no meio entre os dois botões:"
        >
        <div>
        <BotaoCustomizado aoClicar={decrementar} cor="primaria">
          Menos Um
        </BotaoCustomizado>
        </div>
        <Principal questao={`O número é: ${numero}`} />
        <div>
        <BotaoCustomizado aoClicar={incrementar} cor="secundaria">
          Mais Um
        </BotaoCustomizado>
        </div>
      </Principal>
    </div>
  );
};

export default Contador;
