import logo from './geoffrey.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Naskaline, introduces to you today...
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="accroche">Je peux installer votre
          <b><i className="key-word"> Environnement de développement</i></b> très vite Professor!
          <br />
          Donne le diamant, Tu le retrouve safe en un clein d'oeil.
        </p>
        <a
          className="App-link"
          href="mailto:lpchampigny@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <br />
          Faire signe à demi-lune
        </a>
      </header>
    </div>
  );
}

export default App;
