import React from "react";
import Button from "../buttons/Button";
import style from "./style.module.scss";

class Formulario extends React.Component {
  render(): React.ReactNode {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer} style={{ padding: "2px 0px" }}>
          <label htmlFor="tarefa">
            <strong>Tarefa: </strong>
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            required
            placeholder="Tarefa da Fila"
          />
        </div>
        <div className={style.inputContainer} style={{ padding: "2px 0px" }}>
          <label htmlFor="tempo">
            <strong>Tempo: </strong>
          </label>
          <input
            type="time"
            name="tempo"
            id="tempo"
            max="01:30:00"
            min="00:00:00"
            step="1"
            required
          />
        </div>
        <Button>Adicionar Tarefa</Button>
      </form>
    );
  }
}

export default Formulario;
