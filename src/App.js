import './App.css';
import CalcButton from './components/CalcButton';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p> React Calculator </p>
      </header>
      <CalcButton standardClass="lightgray" alternativeClass="aqua" />
      <CalcButton standardClass="lightgray" alternativeClass="orange" />
    </div>
  );
}

export default App;
