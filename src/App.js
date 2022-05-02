import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header color="green">
          <Link to="/test">Go to test page</Link>
        </Header>

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Footer>
          Aurevoir !
        </Footer>

      </header>

    </div>
  );
}

export default App;
