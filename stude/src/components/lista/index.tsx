import React from "react";

function Lista() {
  const tarefas = [
    {
      tarefa: "ReactJS",
      tempo: "01:00:20",
    },
    {
      tarefa: "Java com Spring",
      tempo: "20:00:20",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
    {
      tarefa: "JUnit",
      tempo: "25:00:00",
    },
  ];
  return (
    <aside>
      <h2>TAREFAS DO DIA</h2>
      <ul>
        {tarefas.map((tar, index) => (
          <li key={index}>
            <h3>{tar.tarefa}</h3>
            <span>{tar.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
