import logo from './logo.svg';
import './App.css';

import Home from './components/Home';

// function App() {
const App = () => {
  let x = 5;
  return (
    <div className="App" style={
      { border: '50px solid red', }
    }>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world ReactJs with x = {JSON.stringify(x)}
          {console.log("check x >>>>: ", x)}
        </p>
        <Home />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

