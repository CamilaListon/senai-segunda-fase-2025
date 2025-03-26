import { useState } from "react";
import "./ListaTarefas.css";

function ListaTarefas() {
    const [tarefa, setTarefa] = useState("");
    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = () => {
        if (!tarefa.trim()) return;
        setTarefas([...tarefas, { texto: tarefa, concluida: false }]);
        setTarefa("");
    };

    const removerTarefa = (index) => {
        const novasTarefas = tarefas.filter((_, i) => i !== index);
        setTarefas(novasTarefas);
    };

    const alternarConcluida = (index) => {
        const novasTarefas = [...tarefas];
        novasTarefas[index].concluida = !novasTarefas[index].concluida;
        setTarefas(novasTarefas);
    };

    return (
        <div className="container-lista">
            <h2>Lista de Tarefas</h2>
            <div className="input-container">
                <input
                    type="text"
                    value={tarefa}
                    onChange={(e) => setTarefa(e.target.value)}
                    placeholder="Digite uma tarefa..."
                />
                <button onClick={adicionarTarefa} className="botaoAdd">Adicionar</button>
            </div>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className={item.concluida ? "concluida" : ""}>
                        <input
                            type="checkbox"
                            checked={item.concluida}
                            onChange={() => alternarConcluida(index)}
                        />
                        <span>{item.texto}</span>
                        <button onClick={() => removerTarefa(index)} id="botaoExcluir">🗑️</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaTarefas;
