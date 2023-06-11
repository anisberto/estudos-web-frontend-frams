import Formulario from './components/formulario';
import Lista from './components/lista';

function App() {
  return (
    <div className="App" style={{padding: '1rem 30px',}}>
      <h1>Studies</h1>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
