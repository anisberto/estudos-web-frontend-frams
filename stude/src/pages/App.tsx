import Formulario from "../components/formulario";
import Lista from "../components/lista";
import style from "./style.module.scss";

function App() {
  return (
    <div className={style.AppStyle} style={{ padding: "1rem 30px" }}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
