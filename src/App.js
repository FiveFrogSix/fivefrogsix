import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/fivefrogsix"
          target="_blank"
          rel="noopener noreferrer"
        >
          FiveFrogSix
        </a>
      </header>
    </div>
  );
}

export default App;
