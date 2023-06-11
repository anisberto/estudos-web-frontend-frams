import React from "react";
import Button from "../buttons/Button";

class Formulario extends React.Component {
  render(): React.ReactNode {
    return (
      <form>
        <div style={{ padding: "2px 0px" }}>
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
        <div style={{ padding: "2px 0px" }}>
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
        <Button />
      </form>
    );
  }
}

export default Formulario;
