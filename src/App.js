import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import Product from './components/Products/Product';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Nav from './components/Navigation/Nav';
//JSX
// function App() { 
const App = () => {

  const x = [1, 2, 3, { name: 'duong' }]
  // const x = { name: 'eric' }

  return (
    <div>
      <Nav />
      <div className="App">
        <header className="App-header content-left">
          <div style={{ textAlign: "center" }}> <img src={logo} className="App-logo" alt="logo" /></div>

          <p>
            Hello world React with x = {JSON.stringify(x)}
            {console.log('values x = ', x)}
          </p>
          <Home />
        </header>
        <div className='content-right'>
          <AddNewProduct />
          <hr />
          <Product />
        </div>
      </div>
    </div>
  );
}


export default App;
