import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import store from './store/store'
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      </Provider>
      </div>
  );
}

export default App;
