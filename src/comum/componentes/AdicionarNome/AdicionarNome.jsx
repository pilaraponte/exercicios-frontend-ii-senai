import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import Principal from "../Principal/Principal"
import { useState } from "react";

const AdicionarNome = () => {
    const [nome, setNome] = useState("");
    const [listaNomes, setListaNomes] = useState([]);

    const adicionarNomeNaLista = () => {
        if (nome.trim () !== "") {
            setListaNomes([...listaNomes, nome]);
            setNome("");
        }
    };

    return (

        <Principal 
        questao="10.Crie um componente chamado AdicionarNome que contém um campo do tipo texto e um botão Adicionar que ao ser clicado deve adicionar o nome digitado em uma lista e mostrar:">
        <div>
        <input
        type="text"
        placeholder="Digite um nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}/>   <BotaoCustomizado aoClicar={adicionarNomeNaLista} cor="secundaria">Adicionar </BotaoCustomizado>
        </div>
        <div>
            <h4>Lista de Nomes:</h4>
            <ul>
                {listaNomes.map((nome,index) => (
                    <li key={index}>{nome}</li>
                ))}
            </ul>
        </div>
        </Principal>
        
    )
}

export default AdicionarNome;