import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import { useState } from "react";


const PaginaListaTarefas = () => {
    
    const [descricao, setDescricao] = useState('');
    const [tarefas, setTarefas] = useState([]);

    const adicionarNaLista = () => {
        setTarefas([...tarefas, descricao]);
    };

    return (
        <div>
            <Principal titulo="Lista de Tarefas" voltarPara="/">
                <div>
                    <input type="text" value={descricao} onChange={(e) => {
                        setDescricao(e.target.value);
                    } } 
                    />
                    <BotaoCustomizado aoClicar={adicionarNaLista}>+</BotaoCustomizado>
                </div>

                <ul>
                    {tarefas.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })};
                </ul>
            </Principal>
        </div>
    );
};

export default PaginaListaTarefas;