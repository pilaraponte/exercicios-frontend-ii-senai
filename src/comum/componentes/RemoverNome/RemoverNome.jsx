import { useState } from "react";
import Principal from "../Principal/Principal";
import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import { FaRegTrashCan } from "react-icons/fa6";


const RemoverNome = () => {
    const [nome, setNome] = useState("");
    const [listaNomes, setListaNomes] = useState([]);

    const adicionarNomeNaLista = () => {
        if (nome.trim() !== "") {
            setListaNomes([...listaNomes, nome]);
            setNome("");
        }
    };

    const removerNomeDaLista = (index) => {
        const novaListaNomes = listaNomes.filter((_, i) => i !== index);  
        setListaNomes(novaListaNomes); 
    };

    return (
        <Principal 
            questao="11.Crie um componente chamado RemoverNome que contém uma lista de nomes com o botão Remover ao lado que ao ser clicado deve remover o respectivo nome da lista:">
            
            <div>
                <input
                    type="text"
                    placeholder="Digite um nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />   
                <BotaoCustomizado aoClicar={adicionarNomeNaLista} cor="secundaria">Adicionar</BotaoCustomizado>
            </div>
            
            <div>
                <h4>Lista de Nomes:</h4>
                <ul>
                    {listaNomes.map((nome, index) => (
                        <li key={index}>
                            {nome}
                            <FaRegTrashCan onClick={() => removerNomeDaLista(index)} />
                             
                        </li>
                    ))}
                </ul>
            </div>
        </Principal>
    );
};

export default RemoverNome;
