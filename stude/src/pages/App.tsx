import Formulario from "../components/formulario";
import Lista from "../components/lista";
import "./style.scss";

function App() {
  return (
    <div className="AppStyle" style={{ padding: "1rem 30px" }}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
